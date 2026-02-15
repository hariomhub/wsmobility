import authService from "./authService";
class CloudinaryUploadService {
  constructor() {
    this.apiBaseUrl = process.env.REACT_APP_API_URL;
    this.cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    this.uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

    this.allowedTypes = {
      image: ['image/jpeg', 'image/png', 'image/jpg'],
      document: ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
    };
    this.maxFileSize = 10 * 1024 * 1024; // 10 MB

    // Debug: Log configuration
    console.log('Cloudinary config:', {
      apiBaseUrl: this.apiBaseUrl,
      cloudName: this.cloudName,
      uploadPreset: this.uploadPreset,
      hasCloudName: !!this.cloudName,
      hasUploadPreset: !!this.uploadPreset
    });
  }


  // Validate file
  validateFile(file, type = 'document') {
    const errors = [];

    if (!file) {
      errors.push('No file selected');
      return { isValid: false, errors };
    }

    if (file.size > this.maxFileSize) {
      errors.push(`File size must be less than ${this.maxFileSize / (1024 * 1024)}MB`);
    }

    if (!this.allowedTypes[type].includes(file.type)) {
      errors.push(`Invalid file type. Allowed types: ${this.allowedTypes[type].join(', ')}`);
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  async uploadFile(file, category, onProgress = null) {
    // Validate Cloudinary configuration
    if (!this.cloudName || !this.uploadPreset) {
      throw new Error('Cloudinary configuration missing. Check REACT_APP_CLOUDINARY_CLOUD_NAME and REACT_APP_CLOUDINARY_UPLOAD_PRESET');
    }

    // Auth check
    const isAuthenticated = await authService.isAuthenticated();
    if (!isAuthenticated) {
      throw new Error('User is not authenticated');
    }

    const currentUser = await authService.getCurrentUser();
    if (!currentUser) {
      throw new Error('Unable to get current user');
    }

    // Step 1: Ask backend for a signed Cloudinary signature
    const folder = `dealership/${currentUser.id}/${category}`;
    const res = await fetch(`${this.apiBaseUrl}/api/cloudinary/signature?folder=${encodeURIComponent(folder)}`);
    const { signature, timestamp, apiKey, cloudName, upload_preset } = await res.json();

    if (!signature) throw new Error('Failed to get Cloudinary signature');

    // Step 2: Build form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', apiKey);
    formData.append('timestamp', timestamp);
    formData.append('signature', signature);
    formData.append('folder', folder);
    formData.append('upload_preset', upload_preset);

    // Optional context
    formData.append('context', `userId=${currentUser.id}|category=${category}|originalName=${file.name}`);
    formData.append('tags', `dealership,${category},${currentUser.id}`);

    // Step 3: Upload directly to Cloudinary
    const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

    console.log('🧾 Upload Params:', {
      uploadUrl,
      apiKey,
      timestamp,
      signature,
      upload_preset,
      folder,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size
    });



    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      if (xhr.upload && onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) onProgress((e.loaded / e.total) * 100);
        });
      }

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            if (!response.secure_url) throw new Error('Invalid Cloudinary response');
            resolve({
              success: true,
              url: response.secure_url,
              publicId: response.public_id,
              format: response.format,
              resourceType: response.resource_type,
              size: file.size,
              type: file.type,
              category
            });
          } catch (err) {
            reject(new Error('Failed to parse Cloudinary response'));
          }
        } else {
          reject(new Error(`Upload failed: ${xhr.statusText}`));
        }
      });

      xhr.addEventListener('error', () => reject(new Error('Network error during upload')));
      xhr.addEventListener('timeout', () => reject(new Error('Upload timeout')));

      xhr.timeout = 30000;
      xhr.open('POST', uploadUrl);
      xhr.send(formData);
    });
  }

  // Upload multiple files with better error handling
  async uploadMultipleFiles(files, onProgress = null) {
    const results = [];
    const errors = [];
    const fileCount = Object.keys(files).filter(key => files[key]).length;

    console.log('Starting multiple file upload:', {
      totalFiles: fileCount,
      files: Object.keys(files).filter(key => files[key])
    });

    const progressState = { completed: 0 };
    for (const [category, file] of Object.entries(files)) {
      if (!file) continue;

      const currentCompleted = progressState.completed;
      try {
        console.log(`Uploading ${category}:`, file.name);
        const result = await this.uploadFile(
          file,
          category,
          (progress) => {
            if (onProgress) {
              const currentFileProgress = progress / fileCount;
              const completedProgress = (currentCompleted / fileCount) * 100;
              onProgress(Math.min(completedProgress + currentFileProgress, 100));
            }
          }
        );
        progressState.completed++;
        results.push({ category, ...result });
        console.log(`Successfully uploaded ${category}`);
      } catch (error) {
        console.error(`Failed to upload ${category}:`, error);
        errors.push({ category, error: error.message });
      }
    }

    return {
      success: errors.length === 0,
      results,
      errors
    };
  }
}

const cloudinaryUploadService = new CloudinaryUploadService();
export default cloudinaryUploadService;
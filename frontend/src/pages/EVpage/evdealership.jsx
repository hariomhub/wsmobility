import React, { useState, useEffect } from 'react';
import { Phone, Mail, User, Building, MapPin, DollarSign, Users, FileText, Check, ArrowRight, Upload, Loader2, X } from 'lucide-react';
import EvNavbar from '../../components/navbar/evNav';
import { useLocation, useSearchParams} from 'react-router-dom';

// Service imports
import authService from '../../services/authService';
import cloudinaryUploadService from '../../services/cloudinaryUploadService';

// Configuration and constants
const FORM_CONFIG = {
  indianStates: [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ],
  businessTypes: [
    { value: 'proprietorship', label: 'Proprietorship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'private_limited', label: 'Private Limited' },
    { value: 'llp', label: 'Limited Liability Partnership' }
  ],
  areaTiers: [
    { value: 'tier1', label: 'Tier-1 (Metro cities)' },
    { value: 'tier2', label: 'Tier-2 (Major cities)' },
    { value: 'tier3', label: 'Tier-3 (Small towns)' }
  ],
  propertyStatuses: [
    { value: 'owned', label: 'Owned' },
    { value: 'rented', label: 'Rented' },
    { value: 'lease', label: 'Lease' }
  ],
  investmentRanges: [
    { value: '5-10', label: '₹5-10 Lakhs' },
    { value: '10-20', label: '₹10-20 Lakhs' },
    { value: '20-50', label: '₹20-50 Lakhs' },
    { value: '50-100', label: '₹50 Lakhs - 1 Crore' },
    { value: '100+', label: '₹1 Crore+' }
  ],
  investmentSources: [
    { value: 'self', label: 'Self-funded' },
    { value: 'bank_loan', label: 'Bank Loan' },
    { value: 'investor', label: 'Investor' },
    { value: 'mixed', label: 'Mixed (Self + Loan)' }
  ],
  exclusivityOptions: [
    { value: 'yes', label: 'Yes, I\'m open to exclusivity' },
    { value: 'no', label: 'No, I prefer multi-brand approach' }
  ],
  requiredFields: [
    'fullName', 'email', 'phoneNumber', 'age', 'businessType', 'city', 'state', 'pincode',
    'areaType', 'hasExperience', 'dealershipAddress', 'propertyStatus', 'showroomSize',
    'hasServiceArea', 'hasParkingSpace', 'hasPowerBackup', 'hasChargingStation',
    'investmentCapacity', 'investmentSource', 'meetTargets', 'salesExecutives',
    'technicians', 'trainStaff', 'motivation', 'exclusivity'
  ],
  requiredFiles: ['idProof', 'addressProof']
};

const INITIAL_FORM_DATA = {
  fullName: '', phoneNumber: '', email: '', age: '', idProof: null,
  businessType: '', businessName: '', gstNumber: '', hasExperience: '', experienceDetails: '',
  city: '', state: '', pincode: '', areaType: '', dealershipAddress: '', propertyStatus: '',
  showroomSize: '', hasServiceArea: '', hasParkingSpace: '', hasPowerBackup: '', hasChargingStation: '',
  investmentCapacity: '', investmentSource: '', meetTargets: '',
  salesExecutives: '', technicians: '', trainStaff: '',
  motivation: '', exclusivity: '',
  addressProof: null, businessProof: null, propertyLayout: null,
  declaration: false
};

// Components
const InputField = ({ label, type = 'text', value, onChange, placeholder, required = false, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent ${error ? 'border-red-500' : 'border-gray-300'
        }`}
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SelectField = ({ label, value, onChange, options, placeholder, required = false, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent ${error ? 'border-red-500' : 'border-gray-300'
        }`}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value || option} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextareaField = ({ label, value, onChange, placeholder, required = false, maxLength, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent ${error ? 'border-red-500' : 'border-gray-300'
        }`}
      maxLength={maxLength}
      {...props}
    />
    {maxLength && (
      <p className="text-sm text-gray-500 mt-1">{value.length}/{maxLength} characters</p>
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const FileUpload = ({ label, onChange, description, required = false, currentFile, error, uploading }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex items-center justify-center w-full">
      <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 ${error ? 'border-red-500' : 'border-gray-300'
        }`}>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {uploading ? (
            <Loader2 className="w-6 h-6 mb-2 text-gray-500 animate-spin" />
          ) : (
            <Upload className="w-6 h-6 mb-2 text-gray-500" />
          )}
          <p className="text-sm text-gray-500">
            {currentFile ? currentFile.name : label}
          </p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <input
          type="file"
          className="hidden"
          onChange={(e) => onChange(e.target.files[0])}
          accept=".pdf,.jpg,.jpeg,.png"
          disabled={uploading}
        />
      </label>
    </div>
    {currentFile && !uploading && (
      <div className="flex items-center justify-between mt-2 p-2 bg-green-50 rounded">
        <p className="text-xs text-green-600">✓ {currentFile.name} selected</p>
        <button
          type="button"
          onClick={() => onChange(null)}
          className="text-red-500 hover:text-red-700"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const FormSection = ({ icon: Icon, title, children }) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-6 h-6 text-green-700" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);

const LoadingButton = ({ onClick, isLoading, children, className = "", disabled = false }) => (
  <button
    onClick={onClick}
    disabled={isLoading || disabled}
    className={`flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
  </button>
);

const EVDealership = () => {
  const [currentStep, setCurrentStep] = useState('mobile');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploadingFiles, setUploadingFiles] = useState({});

  const [searchParams] =useSearchParams();

  useEffect(() => {
  const verified = searchParams.get("verified");
  const emailFromQuery = searchParams.get("email");

  console.log("Verified:", verified, "Email:", emailFromQuery);

  if (verified === "true" && emailFromQuery) {
    localStorage.setItem("verifiedEmail", emailFromQuery);
    setFormData(prev => ({ ...prev, email: emailFromQuery }));
    setCurrentStep("form");
  }
}, [searchParams]);


  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileChange = async (field, file) => {
    if (!file) {
      setFormData(prev => ({ ...prev, [field]: null }));
      return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, [field]: 'File size must be less than 10MB' }));
      return;
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, [field]: 'Only JPG, PNG, and PDF files are allowed' }));
      return;
    }

    setFormData(prev => ({ ...prev, [field]: file }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    FORM_CONFIG.requiredFields.forEach(field => {
      if (!formData[field] || formData[field] === '') {
        newErrors[field] = 'This field is required';
      }
    });

    // Validate required files
    FORM_CONFIG.requiredFiles.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This file is required';
      }
    });

    // Validate email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate age
    if (formData.age && (formData.age < 18 || formData.age > 100)) {
      newErrors.age = 'Age must be between 18 and 100';
    }

    // Validate pincode
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    // Validate showroom size
    if (formData.showroomSize && formData.showroomSize < 100) {
      newErrors.showroomSize = 'Minimum showroom size should be 100 sq. ft.';
    }

    // Validate declaration
    if (!formData.declaration) {
      newErrors.declaration = 'Please accept the declaration';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendVerificationEmail = async () => {
  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    setErrors({ email: 'Please enter a valid email address' });
    return;
  }

  setIsLoading(true);
  try {
    const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/email/send-verification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email })
    });
    const data = await resp.json();
    if (data.success) {
      setIsLinkSent(true);
      setErrors({});
    } else {
      setErrors({ email: data.message || data.error || 'Failed to send verification email' });
    }
  } catch (err) {
    console.error('Error sending verification email:', err);
    setErrors({ email: 'Failed to send verification email. Please try again.' });
  }
  setIsLoading(false);
};



  // Keep these state variables
  const [canResend, setCanResend] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  // Keep the resend timer useEffect
  useEffect(() => {
    if (isLinkSent && resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
  }, [isLinkSent, resendTimer]);

  const resendVerificationEmail = async () => {
  setIsLoading(true);
  try {
    await sendVerificationEmail(); // ✅ reuse same logic

    // After successful resend, restart the timer
    setCanResend(false);
    setResendTimer(30);
  } catch (error) {
    console.error('Error resending verification email:', error);
  }
  setIsLoading(false);
};

  const uploadFiles = async () => {
    console.log("🚀 Starting uploadFiles()...");
    const isAuth = await authService.isAuthenticated();
    if (!isAuth) {
      throw new Error('User authentication lost. Please refresh and try again.');
    }

    const uploadedFiles = {};
    const fileFields = ['idProof', 'addressProof', 'businessProof', 'propertyLayout'];

    for (const field of fileFields) {
      if (formData[field]) {
        try {
          setUploadingFiles(prev => ({ ...prev, [field]: true }));

          // Add retry logic
          let retries = 3;
          let result = null;

          while (retries > 0) {
            try {
              console.log("Starting uploadFiles()");
              result = await cloudinaryUploadService.uploadFile(
                formData[field],
                field
              );
              console.log("Uploaded files");
              
              break; // Success, exit retry loop
            } catch (error) {
              console.error(`Upload attempt failed for ${field}:`, error);
              retries--;
              if (retries === 0) throw error;

              // Wait before retry
              await new Promise(resolve => setTimeout(resolve, 1000));
            }
          }

          if (result && result.success) {
            uploadedFiles[field] = {
              filename: result.fileName,
              originalName: result.originalName,
              url: result.url,
              size: result.size,
              type: result.type
            };
            console.log(`Successfully uploaded ${field}:`, uploadedFiles[field]);
          } else {
            throw new Error(`Failed to get valid upload result for ${field}`);
          }
        } catch (error) {
          console.error(`Error uploading ${field}:`, error);
          throw new Error(`Failed to upload ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${error.message}`);
        } finally {
          setUploadingFiles(prev => ({ ...prev, [field]: false }));
        }
      }
    }

    console.log('All files uploaded successfully:', uploadedFiles);
    return uploadedFiles;
  };

  const submitApplication = async () => {
    if (!validateForm()) {
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(`[data-field="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsLoading(true);

    try {
      // Upload files first
      const uploadedFiles = await uploadFiles();
      console.log('Uploaded files:', uploadedFiles);

      // Debug: Log form data before conversion
      console.log('Form data before conversion:', formData);

      // ✅ File validation (allow only jpg, png, pdf)
      const validateUploadedFile = (fileObj, fieldName) => {
        if (!fileObj) return null;

        // Check if fileObj has the expected structure
        if (!fileObj.url || !fileObj.filename) {
          throw new Error(`Invalid file object for ${fieldName}. Missing url or filename`);
        }

        // Validate the URL string (now we know fileObj.url is a string)
        const allowedExtensions = [".jpg", ".jpeg", ".png", ".pdf"];
        const lowerUrl = fileObj.url.toLowerCase();
        const isValid = allowedExtensions.some(ext => lowerUrl.includes(ext));

        if (!isValid) {
          throw new Error(`Invalid file type uploaded for ${fieldName}. Allowed: jpg, png, pdf`);
        }

        // Return the complete file object structure that your backend expects
        return {
          filename: fileObj.filename,
          originalName: fileObj.originalName,
          url: fileObj.url,
          size: fileObj.size,
          type: fileObj.type,
          publicId: fileObj.publicId || fileObj.filename
        };
      };

        // Prepare application data with proper data type conversions
        const applicationData = {
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber.startsWith('+91')
            ? formData.phoneNumber
            : `+91${formData.phoneNumber}`,
          email: formData.email,
          age: parseInt(formData.age),
          businessType: formData.businessType,
          businessName: formData.businessName || '',
          gstNumber: formData.gstNumber || '',
          hasExperience: formData.hasExperience === 'yes',
          experienceDetails: formData.experienceDetails || '',
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          areaType: formData.areaType,
          dealershipAddress: formData.dealershipAddress,
          propertyStatus: formData.propertyStatus,
          showroomSize: parseInt(formData.showroomSize),
          hasServiceArea: formData.hasServiceArea === 'yes',
          hasParkingSpace: formData.hasParkingSpace === 'yes',
          hasPowerBackup: formData.hasPowerBackup === 'yes',
          hasChargingStation: formData.hasChargingStation === 'yes',
          investmentCapacity: formData.investmentCapacity,
          investmentSource: formData.investmentSource,
          meetTargets: formData.meetTargets === 'yes',
          salesExecutives: parseInt(formData.salesExecutives),
          technicians: parseInt(formData.technicians),
          trainStaff: formData.trainStaff === 'yes',
          motivation: formData.motivation,
          exclusivity: formData.exclusivity,
          documents: {
            idProof: validateUploadedFile(uploadedFiles.idProof, "ID Proof"),
            addressProof: validateUploadedFile(uploadedFiles.addressProof, "Address Proof"),
            businessProof: validateUploadedFile(uploadedFiles.businessProof, "Business Proof"),
            propertyLayout: validateUploadedFile(uploadedFiles.propertyLayout, "Property Layout")
          },
          declaration: formData.declaration
        };

        // Debug: Log the final application data
        console.log('Application data being sent:', applicationData);

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dealership/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicationData),
        });

        // Get response text first to see raw response
        const responseText = await response.text();
        console.log('Raw response:', responseText);

        // Try to parse as JSON
        let result;
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          console.error('Failed to parse response as JSON:', parseError);
          throw new Error(`Server returned invalid response: ${responseText}`);
        }

        console.log('Parsed response:', result);

        if (result.success) {
          setCurrentStep("success");
        } else {
          // Log detailed validation errors
          if (result.errors && Array.isArray(result.errors)) {
            console.error('Validation errors:', result.errors);

            // Display all validation errors
            const errorMessages = result.errors.map(err =>
              `${err.path || err.param}: ${err.msg}`
            ).join('\n');

            alert(`Validation failed:\n${errorMessages}`);
          } else {
            console.error('Backend error:', result);
            alert(`Error: ${result.message || "Failed to submit application"}`);
          }

          throw new Error(result.message || "Failed to submit application");
        }
      } catch (error) {
        console.error("Error submitting application:", error);

        // Don't show alert if we already showed validation errors
        if (!error.message.includes('Validation failed')) {
          alert(`Error: ${error.message}`);
        }
      }

      setIsLoading(false);
    };

    // Mobile verification screen
    if (currentStep === 'mobile') {
      return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
          <EvNavbar />
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">EV Dealership</h1>
              <p className="text-gray-600">Email Verification Required</p>
            </div>

            <div className="space-y-6">
              <InputField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                placeholder="Enter your email address"
                disabled={isLinkSent}
                required
                error={errors.email}
              />

              {!isLinkSent ? (
                <LoadingButton
                  onClick={sendVerificationEmail}
                  isLoading={isLoading}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
                >
                  <ArrowRight className="w-5 h-5" />
                  Send Verification Link
                </LoadingButton>
              ) : (
                <div className="text-center">
                  <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Verification Link Sent!</h3>
                    <p className="text-sm text-green-600 mt-2">
                      Please check your email and click the verification link to continue.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Sent to: {formData.email}
                    </p>
                  </div>

                  <div className="mt-4">
                    {canResend ? (
                      <button
                        onClick={resendVerificationEmail}
                        disabled={isLoading}
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                      >
                        Resend Verification Link
                      </button>
                    ) : (
                      <span className="text-gray-500 text-sm">
                        Resend link in {resendTimer}s
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Success screen
    if (currentStep === 'success') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
          <EvNavbar />
          <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in becoming an EV bike dealer. We have received your application and will review it shortly.
            </p>
            <p className="text-sm text-gray-500">
              You will receive a confirmation email shortly with your application details.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      );
    }

    // Main form
    return (
      <div className="min-h-screen bg-green-50 py-28 px-4">
        <EvNavbar />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-green-600 text-white p-8">
              <h1 className="text-4xl text-center font-bold mb-2">EV Bike Dealership Application</h1>
              <p className="text-green-100 text-lg text-center">Join our network of sustainable mobility partners</p>
              <p className="text-center text-green-200 mt-2">Verified: {formData.email}</p>
            </div>

            <div className="p-8 space-y-8">
              {/* Personal Details */}
              <FormSection icon={User} title="Personal Details">
                <InputField
                  label="Full Name"
                  value={formData.fullName}
                  onChange={(value) => handleInputChange('fullName', value)}
                  placeholder="Enter your full name"
                  required
                  error={errors.fullName}
                  data-field="fullName"
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(value) => handleInputChange('phoneNumber', value)}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  required
                  error={errors.phoneNumber}
                  data-field="phoneNumber"
                />
                <InputField
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="Enter your email address"
                  required
                  error={errors.email}
                  data-field="email"
                />
                <InputField
                  label="Age"
                  type="number"
                  value={formData.age}
                  onChange={(value) => handleInputChange('age', value)}
                  placeholder="Enter your age"
                  min="18"
                  max="100"
                  required
                  error={errors.age}
                  data-field="age"
                />
                <div className="md:col-span-2">
                  <FileUpload
                    label="ID Proof (Aadhaar/PAN)"
                    onChange={(file) => handleFileChange('idProof', file)}
                    description="PNG, JPG or PDF (MAX. 10MB)"
                    currentFile={formData.idProof}
                    required
                    error={errors.idProof}
                    uploading={uploadingFiles.idProof}
                  />
                </div>
              </FormSection>

              {/* Business Details */}
              <FormSection icon={Building} title="Business Details">
                <SelectField
                  label="Type of Business"
                  value={formData.businessType}
                  onChange={(value) => handleInputChange('businessType', value)}
                  options={FORM_CONFIG.businessTypes}
                  placeholder="Select business type"
                  required
                  error={errors.businessType}
                  data-field="businessType"
                />
                <InputField
                  label="Business Name"
                  value={formData.businessName}
                  onChange={(value) => handleInputChange('businessName', value)}
                  placeholder="Enter business name (if any)"
                />
                <InputField
                  label="GST Number"
                  value={formData.gstNumber}
                  onChange={(value) => handleInputChange('gstNumber', value)}
                  placeholder="Enter GST number (if applicable)"
                />
                <SelectField
                  label="Experience in Automotive Industry"
                  value={formData.hasExperience}
                  onChange={(value) => handleInputChange('hasExperience', value)}
                  options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                  placeholder="Select"
                  required
                />
                {formData.hasExperience === 'yes' && (
                  <div className="md:col-span-2">
                    <TextareaField
                      label="Experience Details"
                      value={formData.experienceDetails}
                      onChange={(value) => handleInputChange('experienceDetails', value)}
                      placeholder="Describe your experience in automotive or related industry"
                      rows="3"
                    />
                  </div>
                )}
              </FormSection>

              {/* Location Details */}
              <FormSection icon={MapPin} title="Location Details">
                <InputField
                  label="City/Town"
                  value={formData.city}
                  onChange={(value) => handleInputChange('city', value)}
                  placeholder="Enter city/town"
                  required
                  error={errors.city}
                  data-field="city"
                />
                <SelectField
                  label="State"
                  value={formData.state}
                  onChange={(value) => handleInputChange('state', value)}
                  options={FORM_CONFIG.indianStates}
                  placeholder="Select state"
                  required
                  error={errors.state}
                  data-field="state"
                />
                <InputField
                  label="Pincode"
                  value={formData.pincode}
                  onChange={(value) => handleInputChange('pincode', value)}
                  placeholder="Enter pincode"
                  maxLength="6"
                  required
                  error={errors.pincode}
                  data-field="pincode"
                />
                <SelectField
                  label="Area Type"
                  value={formData.areaType}
                  onChange={(value) => handleInputChange('areaType', value)}
                  options={FORM_CONFIG.areaTiers}
                  placeholder="Select area type"
                  required
                  error={errors.areaType}
                  data-field="areaType"
                />
                <div className="md:col-span-2">
                  <TextareaField
                    label="Proposed Dealership Address"
                    value={formData.dealershipAddress}
                    onChange={(value) => handleInputChange('dealershipAddress', value)}
                    placeholder="Enter complete address"
                    rows="3"
                    required
                    error={errors.dealershipAddress}
                    data-field="dealershipAddress"
                  />
                </div>
                <SelectField
                  label="Property Status"
                  value={formData.propertyStatus}
                  onChange={(value) => handleInputChange('propertyStatus', value)}
                  options={FORM_CONFIG.propertyStatuses}
                  placeholder="Select property status"
                  required
                  error={errors.propertyStatus}
                  data-field="propertyStatus"
                />
              </FormSection>

              {/* Infrastructure */}
              <FormSection icon={Building} title="Infrastructure">
                <InputField
                  label="Showroom Size (sq. ft.)"
                  type="number"
                  value={formData.showroomSize}
                  onChange={(value) => handleInputChange('showroomSize', value)}
                  placeholder="Enter showroom size"
                  min="100"
                  required
                  error={errors.showroomSize}
                  data-field="showroomSize"
                />
                {['hasServiceArea', 'hasParkingSpace', 'hasPowerBackup', 'hasChargingStation'].map(field => (
                  <SelectField
                    key={field}
                    label={field.replace('has', '').replace(/([A-Z])/g, ' $1').trim()}
                    value={formData[field]}
                    onChange={(value) => handleInputChange(field, value)}
                    options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                    placeholder="Select"
                    required
                    error={errors[field]}
                    data-field={field}
                  />
                ))}
              </FormSection>

              {/* Investment & Financials */}
              <FormSection icon={DollarSign} title="Investment & Financials">
                <SelectField
                  label="Investment Capacity"
                  value={formData.investmentCapacity}
                  onChange={(value) => handleInputChange('investmentCapacity', value)}
                  options={FORM_CONFIG.investmentRanges}
                  placeholder="Select investment range"
                  required
                  error={errors.investmentCapacity}
                  data-field="investmentCapacity"
                />
                <SelectField
                  label="Investment Source"
                  value={formData.investmentSource}
                  onChange={(value) => handleInputChange('investmentSource', value)}
                  options={FORM_CONFIG.investmentSources}
                  placeholder="Select investment source"
                  required
                  error={errors.investmentSource}
                  data-field="investmentSource"
                />
                <SelectField
                  label="Willing to Meet Brand Targets"
                  value={formData.meetTargets}
                  onChange={(value) => handleInputChange('meetTargets', value)}
                  options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                  placeholder="Select"
                  required
                  error={errors.meetTargets}
                  data-field="meetTargets"
                />
              </FormSection>

              {/* Team Setup */}
              <FormSection icon={Users} title="Team Setup">
                <InputField
                  label="Planned Sales Executives"
                  type="number"
                  value={formData.salesExecutives}
                  onChange={(value) => handleInputChange('salesExecutives', value)}
                  placeholder="Number of sales executives"
                  min="1"
                  required
                  error={errors.salesExecutives}
                  data-field="salesExecutives"
                />
                <InputField
                  label="Planned Technicians"
                  type="number"
                  value={formData.technicians}
                  onChange={(value) => handleInputChange('technicians', value)}
                  placeholder="Number of technicians"
                  min="1"
                  required
                  error={errors.technicians}
                  data-field="technicians"
                />
                <SelectField
                  label="Willing to Train Staff"
                  value={formData.trainStaff}
                  onChange={(value) => handleInputChange('trainStaff', value)}
                  options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                  placeholder="Select"
                  required
                  error={errors.trainStaff}
                  data-field="trainStaff"
                />
              </FormSection>

              {/* Motivation & Interest */}
              <FormSection icon={FileText} title="Motivation & Interest">
                <div className="md:col-span-2">
                  <TextareaField
                    label="Why do you want this dealership?"
                    value={formData.motivation}
                    onChange={(value) => handleInputChange('motivation', value)}
                    placeholder="Share your motivation and vision for this dealership"
                    rows="4"
                    maxLength="500"
                    required
                    error={errors.motivation}
                    data-field="motivation"
                  />
                </div>
                <SelectField
                  label="Open to Brand Exclusivity"
                  value={formData.exclusivity}
                  onChange={(value) => handleInputChange('exclusivity', value)}
                  options={FORM_CONFIG.exclusivityOptions}
                  placeholder="Select"
                  required
                  error={errors.exclusivity}
                  data-field="exclusivity"
                />
              </FormSection>

              {/* Documents Upload */}
              <FormSection icon={Upload} title="Documents Upload">
                <FileUpload
                  label="Address Proof"
                  onChange={(file) => handleFileChange('addressProof', file)}
                  description="Utility bill, rent agreement (Required)"
                  currentFile={formData.addressProof}
                  required
                  error={errors.addressProof}
                  uploading={uploadingFiles.addressProof}
                />
                <FileUpload
                  label="Business Proof"
                  onChange={(file) => handleFileChange('businessProof', file)}
                  description="GST certificate, registration (Optional)"
                  currentFile={formData.businessProof}
                  error={errors.businessProof}
                  uploading={uploadingFiles.businessProof}
                />
                <div className="md:col-span-2">
                  <FileUpload
                    label="Property Layout/Showroom Photo"
                    onChange={(file) => handleFileChange('propertyLayout', file)}
                    description="Helps us understand your space better (Optional)"
                    currentFile={formData.propertyLayout}
                    error={errors.propertyLayout}
                    uploading={uploadingFiles.propertyLayout}
                  />
                </div>
              </FormSection>

              {/* Declaration */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="declaration"
                    checked={formData.declaration}
                    onChange={(e) => handleInputChange('declaration', e.target.checked)}
                    className="mt-1 h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="declaration" className="text-sm text-gray-700">
                    <strong>Declaration:</strong> I hereby declare that all the above information is true and complete to the best of my knowledge. I understand that any false information may result in rejection of my application. I am genuinely interested in partnering as a dealer and commit to following the brand guidelines and achieving the set targets.
                  </label>
                </div>
                {errors.declaration && (
                  <p className="text-red-500 text-sm mt-2 ml-8">{errors.declaration}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <LoadingButton
                  onClick={submitApplication}
                  isLoading={isLoading}
                  disabled={Object.values(uploadingFiles).some(Boolean)}
                  className="bg-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg hover:shadow-xl disabled:bg-gray-400"
                >
                  <Check className="w-6 h-6" />
                  {isLoading ? 'Submitting Application...' :
                    Object.values(uploadingFiles).some(Boolean) ? 'Uploading Files...' :
                      'Submit Application'}
                </LoadingButton>
              </div>

              {/* Progress indicator */}
              {(isLoading || Object.values(uploadingFiles).some(Boolean)) && (
                <div className="text-center text-sm text-gray-600">
                  <p>Please wait while we process your application...</p>
                  {Object.values(uploadingFiles).some(Boolean) && (
                    <p className="text-blue-600">Uploading documents...</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default EVDealership;
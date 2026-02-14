const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

class AuthService {
  // Send verification email via backend
  async sendMagicLink(email) {
    try {
      const response = await fetch(`${API_BASE}/api/email/send-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to send verification link');

      localStorage.setItem('verifiedEmail', email);

      return {
        success: true,
        message: `Verification email sent to ${email}. Please check your inbox.`,
      };
    } catch (error) {
      console.error('Error sending verification email:', error);
      return {
        success: false,
        message: error.message || 'An unexpected error occurred. Please try again.',
      };
    }
  }

  // Verify token when user clicks the link
  async verifyEmailToken(token) {
    try {
      const response = await fetch(`${API_BASE}/api/email/verify?token=${token}`);
      const data = await response.json();
      if (data.success && data.email) {
        localStorage.setItem('verifiedEmail', data.email);
      }
      return data;
    } catch (error) {
      console.error('Error verifying email token:', error);
      return { success: false, message: 'Verification failed. Please try again.' };
    }
  }

  async getCurrentUser() {
    // First check if we have a verified email saved
    const email = localStorage.getItem('verifiedEmail');
    if (!email) {
      throw new Error('No verified user found — please verify your email again.');
    }

    // Return a simple user object
    return {
      id: email, // Use email as unique ID
      email: email,
    };
  }

  // Check if user is authenticated (not required if only email-based)
  async isAuthenticated() {
    return true; // or use session-based auth if needed
  }

  // Clear local session
  async clearSession() {
    return { success: true };
  }
}

export default new AuthService();

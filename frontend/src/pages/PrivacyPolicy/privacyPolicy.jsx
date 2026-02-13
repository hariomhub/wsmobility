import React from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTopButton />
      <ParentNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 border-b-4 border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Shield size={48} className="text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-green-100 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white border-2 border-green-200 rounded-lg p-8 md:p-12 text-gray-700 leading-relaxed shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              WS Mobility Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p>
              By using our website and services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Register for an account or use our services</li>
              <li>Contact us through our website or customer service</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Make a purchase or request a service</li>
              <li>Participate in surveys, contests, or promotions</li>
            </ul>
            <p className="mb-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Vehicle information (make, model, registration details)</li>
              <li>Service history and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and managing your account</li>
              <li>Communicating with you about your services, orders, and inquiries</li>
              <li>Sending you marketing communications (with your consent)</li>
              <li>Personalizing your experience on our website</li>
              <li>Analyzing usage patterns to improve our services</li>
              <li>Detecting, preventing, and addressing technical issues and fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer service.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, property, or safety, or that of our users or others.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p>
              We use industry-standard encryption technologies and secure servers to protect your data. Access to personal information is restricted to authorized personnel only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="mb-4">You have certain rights regarding your personal information, including:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
              <li><strong>Opt-out:</strong> You can opt-out of receiving marketing communications from us.</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the contact information provided at the end of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and store information about your preferences and activities on our website. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mt-4">
              <p className="mb-2"><strong>WS Mobility Pvt. Ltd.</strong></p>
              <p className="mb-2">202 Mitu Palace, Near PNB bank, Kanti Factory Rd</p>
              <p className="mb-2">Chitragupta Nagar, Kankarbagh, Patna, Bihar-800026</p>
              <p className="mb-2">Email: info@wsmobility.in</p>
              <p>Phone: 9117031733</p>
            </div>
          </section>
        </div>
      </div>

      <ParentFooter />
    </div>
  );
};

export default PrivacyPolicy;


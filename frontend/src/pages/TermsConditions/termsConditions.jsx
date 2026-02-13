import React from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
                <FileText size={48} className="text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the services of WS Mobility Pvt. Ltd. ("we," "our," or "us"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of our services after any changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
            <p className="mb-4">
              WS Mobility Pvt. Ltd. provides comprehensive mobility solutions including:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Electric vehicle sales and dealership services</li>
              <li>Automotive maintenance and repair services</li>
              <li>Roadside assistance services</li>
              <li>Vehicle-related consultation and support</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Provide accurate and complete information when using our services</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not engage in any activity that may harm or interfere with our services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.1 Pricing</h3>
            <p className="mb-4">
              All prices are displayed in Indian Rupees (INR) and are subject to change without notice. We reserve the right to correct any pricing errors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.2 Payment Methods</h3>
            <p className="mb-4">
              We accept various payment methods including cash, credit/debit cards, and online payment gateways. Payment must be made in full before services are rendered, unless otherwise agreed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4.3 Refunds and Cancellations</h3>
            <p className="mb-4">
              Refund and cancellation policies vary by service type. Please refer to the specific terms provided at the time of service booking. Generally:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Service cancellations must be made at least 24 hours in advance</li>
              <li>Refunds are processed within 7-14 business days</li>
              <li>Completed services are generally non-refundable unless otherwise specified</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Warranties and Limitations</h2>
            <p className="mb-4">
              We strive to provide high-quality services. However:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>We provide services "as is" without warranties of any kind, express or implied</li>
              <li>We do not guarantee that services will be uninterrupted, secure, or error-free</li>
              <li>Warranties for products and services are provided by manufacturers and service providers as applicable</li>
              <li>Our liability is limited to the amount paid for the specific service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, WS Mobility Pvt. Ltd. shall not be liable for:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Damages resulting from unauthorized access to or use of our services</li>
              <li>Any damages exceeding the amount you paid for our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of WS Mobility Pvt. Ltd. or its licensors and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Prohibited Activities</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms and Conditions or for any other reason we deem necessary.
            </p>
            <p>
              Upon termination, your right to use our services will cease immediately, and we may delete your account and related information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <p className="mb-4">
              Any disputes arising from these Terms and Conditions or your use of our services shall be resolved through:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>First, through good faith negotiation</li>
              <li>If negotiation fails, through mediation</li>
              <li>As a last resort, through binding arbitration in accordance with Indian arbitration laws</li>
            </ul>
            <p>
              The jurisdiction for any legal proceedings shall be the courts of Patna, Bihar, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsConditions;


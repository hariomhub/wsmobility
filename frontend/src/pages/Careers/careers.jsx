import React, { useState } from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { Briefcase, ArrowRight, MapPin, Clock, DollarSign, Users, Mail, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: ""
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Patna, Bihar",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹20,000 - ₹35,000/month",
      description: "We are looking for an enthusiastic Sales Executive to join our team and help drive our business growth.",
      responsibilities: [
        "Identify and pursue new sales opportunities",
        "Build and maintain relationships with customers",
        "Achieve sales targets and objectives",
        "Provide product information and demonstrations",
        "Prepare sales reports and forecasts"
      ],
      requirements: [
        "Bachelor's degree in Business or related field",
        "Proven sales experience",
        "Excellent communication and negotiation skills",
        "Strong customer service orientation",
        "Ability to work in a team environment"
      ]
    },
    {
      id: 2,
      title: "Service Technician",
      department: "Service & Maintenance",
      location: "Patna, Bihar",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹25,000 - ₹40,000/month",
      description: "Join our service team as a skilled technician to maintain and repair electric vehicles.",
      responsibilities: [
        "Diagnose and repair electric vehicle issues",
        "Perform routine maintenance and inspections",
        "Test and calibrate vehicle systems",
        "Maintain service records and documentation",
        "Provide technical support to customers"
      ],
      requirements: [
        "Diploma or certification in Automotive Technology",
        "Experience with electric vehicles preferred",
        "Strong technical and problem-solving skills",
        "Attention to detail and safety protocols",
        "Valid driving license"
      ]
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Patna, Bihar",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹30,000 - ₹45,000/month",
      description: "We need a creative Marketing Specialist to develop and execute marketing campaigns.",
      responsibilities: [
        "Develop and implement marketing strategies",
        "Create content for digital and print media",
        "Manage social media accounts and campaigns",
        "Organize events and promotional activities",
        "Analyze market trends and competitor activities"
      ],
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Experience in digital marketing",
        "Strong creative and analytical skills",
        "Proficiency in marketing tools and platforms",
        "Excellent written and verbal communication"
      ]
    },
    {
      id: 4,
      title: "Customer Service Representative",
      department: "Customer Service",
      location: "Patna, Bihar",
      type: "Full-time",
      experience: "1-2 years",
      salary: "₹18,000 - ₹28,000/month",
      description: "Help us deliver exceptional customer service and support to our valued customers.",
      responsibilities: [
        "Handle customer inquiries and complaints",
        "Provide product information and assistance",
        "Process orders and service requests",
        "Maintain customer records and databases",
        "Follow up on customer issues and feedback"
      ],
      requirements: [
        "High school diploma or equivalent",
        "Previous customer service experience",
        "Excellent communication skills",
        "Patience and problem-solving abilities",
        "Proficiency in computer applications"
      ]
    },
    {
      id: 5,
      title: "Accountant",
      department: "Finance & Accounting",
      location: "Patna, Bihar",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹25,000 - ₹40,000/month",
      description: "Join our finance team to manage accounting operations and financial reporting.",
      responsibilities: [
        "Maintain financial records and ledgers",
        "Prepare financial statements and reports",
        "Handle accounts payable and receivable",
        "Process payroll and tax calculations",
        "Assist with budget planning and analysis"
      ],
      requirements: [
        "Bachelor's degree in Accounting or Finance",
        "Knowledge of accounting software (Tally, QuickBooks)",
        "Strong numerical and analytical skills",
        "Attention to detail and accuracy",
        "Understanding of tax regulations"
      ]
    },
    {
      id: 6,
      title: "Store Manager",
      department: "Operations",
      location: "Patna, Bihar",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹35,000 - ₹50,000/month",
      description: "Lead our store operations and ensure excellent customer experience and sales performance.",
      responsibilities: [
        "Manage daily store operations",
        "Supervise and train staff members",
        "Monitor inventory and stock levels",
        "Achieve sales targets and KPIs",
        "Ensure customer satisfaction and service quality"
      ],
      requirements: [
        "Bachelor's degree in Business Administration",
        "Proven retail management experience",
        "Strong leadership and team management skills",
        "Excellent organizational abilities",
        "Customer-focused mindset"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setApplicationForm(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Application submitted successfully! We will contact you soon.");
    setApplicationForm({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      resume: null,
      coverLetter: ""
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTopButton />
      <ParentNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b-4 border-green-600 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-600 p-4 rounded-full">
                <Briefcase size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Careers at WS Mobility
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our team and be part of the electric mobility revolution in Bihar
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Join WS Mobility?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">Advance your career in a fast-growing industry with clear progression paths</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Competitive Packages</h3>
              <p className="text-gray-600 text-sm">Attractive salary packages with performance-based incentives</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Learning & Development</h3>
              <p className="text-gray-600 text-sm">Continuous training and skill development programs</p>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-green-600 font-semibold text-sm">{job.department}</p>
                </div>
                <Briefcase className="w-8 h-8 text-green-600 flex-shrink-0" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-green-600" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} className="text-green-600" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} className="text-green-600" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign size={16} className="text-green-600" />
                  <span>{job.salary}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job);
                }}
                className="w-full flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-300 border-t border-gray-200 pt-4"
              >
                View Details & Apply
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* General Application Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Don't See a Match?</h2>
          <p className="text-gray-700 text-center mb-6">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="text-center">
            <a
              href="mailto:careers@wsmobility.in"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              <Mail size={20} />
              Send Your Resume
            </a>
          </div>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Job Details */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                <p className="text-green-600 font-semibold mb-4">{selectedJob.department}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-green-600" />
                    <span className="text-gray-700">{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-green-600" />
                    <span className="text-gray-700">{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-green-600" />
                    <span className="text-gray-700">{selectedJob.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={20} className="text-green-600" />
                    <span className="text-gray-700">{selectedJob.salary}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{selectedJob.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply for this Position</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={applicationForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={applicationForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={applicationForm.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <input
                        type="text"
                        name="experience"
                        value={applicationForm.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For</label>
                    <input
                      type="text"
                      name="position"
                      value={selectedJob.title}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV *</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
                    <textarea
                      name="coverLetter"
                      value={applicationForm.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Tell us why you're interested in this position..."
                    ></textarea>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <ParentFooter />
    </div>
  );
};

export default Careers;



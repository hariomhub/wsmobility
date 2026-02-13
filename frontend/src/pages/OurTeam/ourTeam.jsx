import React from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { Users, ArrowLeft, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();

  // Sample team members - replace with actual team data
  const teamMembers = [
    {
      id: 1,
      name: "Founder & CEO",
      role: "Chief Executive Officer",
      description: "Visionary leader driving WS Mobility's mission to revolutionize transportation in Bihar.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      email: "ceo@wsmobility.in"
    },
    {
      id: 2,
      name: "Co-Founder",
      role: "Chief Operating Officer",
      description: "Oversees day-to-day operations and ensures seamless service delivery across all divisions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      email: "coo@wsmobility.in"
    },
    {
      id: 3,
      name: "Head of EV Division",
      role: "EV Division Lead",
      description: "Expert in electric mobility solutions, driving our sustainable transportation initiatives.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      email: "ev@wsmobility.in"
    },
    {
      id: 4,
      name: "Head of Services",
      role: "Service Operations Manager",
      description: "Ensures top-quality automotive services and customer satisfaction across all service centers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      email: "services@wsmobility.in"
    },
    {
      id: 5,
      name: "Head of Technology",
      role: "CTO",
      description: "Leads our digital transformation and technology initiatives to enhance customer experience.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      email: "tech@wsmobility.in"
    },
    {
      id: 6,
      name: "Head of Customer Relations",
      role: "Customer Success Manager",
      description: "Dedicated to ensuring exceptional customer experiences and building lasting relationships.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      email: "support@wsmobility.in"
    }
  ];

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
                <Users size={48} className="text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Team
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Meet the passionate professionals driving innovation in mobility solutions
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      {/* Team Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white border-2 border-green-600 rounded-lg p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Team</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            At WS Mobility, we are a diverse team of professionals united by a common vision: to transform transportation in Bihar through innovative, sustainable, and customer-centric solutions. Our team combines expertise in automotive services, electric mobility, technology, and customer relations to deliver exceptional value to our customers.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-green-500"
            >
              {/* Team Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-transparent to-transparent"></div>
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{member.description}</p>

                {/* Contact Info */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-green-200">
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-green-100 p-2 rounded-full hover:bg-green-600 transition-colors duration-300 group"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} className="text-green-600 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-t-2 border-green-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="bg-white border-2 border-green-600 rounded-lg p-6 shadow-lg">
            <p className="text-gray-700 mb-4">
              Interested in joining WS Mobility? Send your resume to:
            </p>
            <a
              href="mailto:careers@wsmobility.in"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg"
            >
              <Mail size={20} className="mr-2" />
              careers@wsmobility.in
            </a>
          </div>
        </div>
      </div>

      <ParentFooter />
    </div>
  );
};

export default OurTeam;


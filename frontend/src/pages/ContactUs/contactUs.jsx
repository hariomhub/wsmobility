import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
  MessageSquare,
  User,
  ChevronRight,
} from "lucide-react";
import ParentFooter from "../../components/footer/parentFooter";
import ParentNav from "../../components/navbar/parentNav";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <MapPin size={24} className="text-green-600" />,
      title: "Our Office",
      lines: [
        "202 Mitu Palace, Near PNB Bank,",
        "Kanti Factory Rd, Chitragupta Nagar,",
        "Kankarbagh, Patna, Bihar – 800026",
      ],
    },
    {
      icon: <Phone size={24} className="text-green-600" />,
      title: "Phone",
      lines: ["+91 9117031733"],
    },
    {
      icon: <Mail size={24} className="text-green-600" />,
      title: "Email",
      lines: ["info@wsmobility.in"],
    },
    {
      icon: <Clock size={24} className="text-green-600" />,
      title: "Business Hours",
      lines: ["Saturday – Thursday: 8:00 AM – 6:00 PM", "Friday: Closed"],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <ParentNav />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center mt-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
            <MessageSquare size={32} className="text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Have a question or want to get in touch? We'd love to hear from you.
            Reach out and we'll respond as soon as possible.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-green-100 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-green-100 hover:border-green-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-50 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2">
                {item.title}
              </h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-green-200 rounded-2xl bg-green-50">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-3.5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9000000000"
                        className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-gray-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="EV Dealership">EV Dealership</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Service & Support">Service & Support</option>
                      <option value="Careers">Careers</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-400 bg-gray-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map + Social */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Find Us Here
              </h2>
              <div className="w-16 h-1 bg-green-500 mb-6 rounded-full"></div>
              <div className="rounded-2xl overflow-hidden border-2 border-green-100 shadow-sm">
                <iframe
                  title="WS Mobility Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Follow Us
              </h3>
              <p className="text-gray-600 text-sm mb-5">
                Stay connected with us on social media for the latest news,
                offers, and updates.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61574614275395"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white border border-green-200 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  <Facebook size={18} className="text-green-600" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/wsmobility"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white border border-green-200 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  <Instagram size={18} className="text-green-600" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/wsmobility/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white border border-green-200 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  <Linkedin size={18} className="text-green-600" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default ContactUs;

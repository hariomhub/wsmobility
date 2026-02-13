import React from "react";
import { useNavigate } from "react-router-dom";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const navigate = useNavigate();

  // Sample blog posts - you can replace this with actual data from an API
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Electric Vehicles in Bihar",
      excerpt: "Discover how electric vehicles are transforming the transportation landscape in Bihar and what WS Mobility is doing to lead this change.",
      author: "WS Mobility Team",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
      category: "Electric Vehicles"
    },
    {
      id: 2,
      title: "Complete Guide to Car Maintenance",
      excerpt: "Learn essential car maintenance tips to keep your vehicle running smoothly and extend its lifespan.",
      author: "WS Mobility Team",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "Roadside Assistance: What You Need to Know",
      excerpt: "Everything you need to know about roadside assistance services and how they can save you time and money.",
      author: "WS Mobility Team",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      category: "Services"
    },
    {
      id: 4,
      title: "Sustainable Mobility Solutions for Modern India",
      excerpt: "Exploring sustainable transportation options and how they contribute to a greener future for India.",
      author: "WS Mobility Team",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "WS Services: Your One-Stop Mobility Solution",
      excerpt: "Learn about the comprehensive range of services offered by WS Mobility and how we're revolutionizing transportation in Bihar.",
      author: "WS Mobility Team",
      date: "2023-12-20",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
      category: "Company News"
    },
    {
      id: 6,
      title: "Tips for Choosing the Right E-Bike",
      excerpt: "A comprehensive guide to help you choose the perfect electric bike that fits your needs and lifestyle.",
      author: "WS Mobility Team",
      date: "2023-12-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
      category: "Electric Vehicles"
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog & News
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Stay updated with the latest news, insights, and updates from WS Mobility
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-white border-2 border-green-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:border-green-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1 text-green-600" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1 text-green-600" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-1 text-green-600" />
                    <span>{post.readTime}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300 cursor-pointer"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-t-2 border-green-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter and never miss an update
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md border-2 border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-r-md hover:bg-green-700 transition duration-300 mt-2 sm:mt-0 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <ParentFooter />
    </div>
  );
};

export default Blog;


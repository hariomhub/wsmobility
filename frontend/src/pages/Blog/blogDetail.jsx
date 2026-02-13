import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";

// Blog posts data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Electric Vehicles in Bihar",
    excerpt: "Discover how electric vehicles are transforming the transportation landscape in Bihar and what WS Mobility is doing to lead this change.",
    author: "WS Mobility Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
    category: "Electric Vehicles",
    content: `
      <p class="mb-4">The electric vehicle (EV) revolution is sweeping across India, and Bihar is no exception. As one of the fastest-growing states in terms of population and economic development, Bihar presents a unique opportunity for sustainable transportation solutions.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Current Landscape</h2>
      <p class="mb-4">Bihar has been witnessing a steady increase in vehicle ownership over the past decade. However, with rising fuel costs and environmental concerns, there's a growing shift towards electric vehicles. The state government has been actively promoting EV adoption through various incentives and infrastructure development programs.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">WS Mobility's Role</h2>
      <p class="mb-4">At WS Mobility, we're at the forefront of this transformation. Our comprehensive range of electric vehicles, including e-bikes and e-cars, is designed to meet the diverse needs of Bihar's residents. We're not just selling vehicles; we're building a sustainable mobility ecosystem.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Infrastructure Development</h2>
      <p class="mb-4">One of the key challenges in EV adoption is charging infrastructure. WS Mobility is working closely with local authorities and partners to establish a robust network of charging stations across major cities in Bihar. Our goal is to ensure that EV owners never have to worry about finding a charging point.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Benefits for Bihar</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Reduced air pollution and improved air quality</li>
        <li>Lower operating costs for vehicle owners</li>
        <li>Job creation in the EV manufacturing and service sector</li>
        <li>Reduced dependence on fossil fuels</li>
        <li>Contribution to India's climate goals</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Looking Ahead</h2>
      <p class="mb-4">The future of transportation in Bihar is electric, and WS Mobility is committed to making this transition smooth and accessible for everyone. We're continuously expanding our product range, improving our services, and building partnerships that will accelerate EV adoption in the state.</p>
      
      <p class="mb-4">Join us in this journey towards a cleaner, greener, and more sustainable Bihar. Together, we can drive the change that our state and our planet need.</p>
    `
  },
  {
    id: 2,
    title: "Complete Guide to Car Maintenance",
    excerpt: "Learn essential car maintenance tips to keep your vehicle running smoothly and extend its lifespan.",
    author: "WS Mobility Team",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
    category: "Maintenance",
    content: `
      <p class="mb-4">Regular car maintenance is crucial for ensuring your vehicle's longevity, safety, and optimal performance. Whether you're a new car owner or have been driving for years, understanding the basics of car maintenance can save you time, money, and prevent unexpected breakdowns.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Regular Oil Changes</h2>
      <p class="mb-4">Engine oil is the lifeblood of your car. It lubricates moving parts, reduces friction, and helps keep the engine cool. Most manufacturers recommend changing the oil every 5,000 to 7,500 miles, but check your owner's manual for specific recommendations.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Tire Care</h2>
      <p class="mb-4">Proper tire maintenance is essential for safety and fuel efficiency. Check tire pressure monthly, rotate tires every 6,000 to 8,000 miles, and inspect for signs of wear or damage. Properly inflated tires can improve fuel economy by up to 3%.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Brake System</h2>
      <p class="mb-4">Your brakes are one of the most critical safety components. Have them inspected regularly, and replace brake pads when they show signs of wear. Listen for unusual sounds like squealing or grinding, which indicate it's time for service.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Battery Maintenance</h2>
      <p class="mb-4">Car batteries typically last 3-5 years. Keep terminals clean and free of corrosion. If your car struggles to start, especially in cold weather, it might be time for a battery check or replacement.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Fluid Levels</h2>
      <p class="mb-4">Regularly check and top off essential fluids including coolant, brake fluid, transmission fluid, and windshield washer fluid. Each plays a vital role in your vehicle's operation.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Air Filter</h2>
      <p class="mb-4">A clean air filter improves engine performance and fuel efficiency. Replace it every 12,000 to 15,000 miles, or more frequently if you drive in dusty conditions.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Professional Service</h2>
      <p class="mb-4">While you can handle some maintenance tasks yourself, regular professional service is essential. WS Mobility offers comprehensive maintenance packages to keep your vehicle in top condition. Our expert technicians use genuine parts and follow manufacturer specifications.</p>
    `
  },
  {
    id: 3,
    title: "Roadside Assistance: What You Need to Know",
    excerpt: "Everything you need to know about roadside assistance services and how they can save you time and money.",
    author: "WS Mobility Team",
    date: "2024-01-05",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "Services",
    content: `
      <p class="mb-4">Roadside assistance is a service that provides help when your vehicle breaks down or you encounter problems while driving. It's an essential service that can save you from being stranded and provide peace of mind during your travels.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">What Roadside Assistance Covers</h2>
      <p class="mb-4">Most roadside assistance programs include services such as:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Battery jump-start service</li>
        <li>Flat tire changes</li>
        <li>Lockout assistance</li>
        <li>Fuel delivery</li>
        <li>Towing to the nearest service center</li>
        <li>Minor mechanical repairs</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">When to Call for Help</h2>
      <p class="mb-4">You should call roadside assistance if you experience:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Dead battery</li>
        <li>Flat tire without a spare or proper tools</li>
        <li>Locked keys inside the vehicle</li>
        <li>Running out of fuel</li>
        <li>Vehicle breakdown or mechanical failure</li>
        <li>Accident requiring towing</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">WS Mobility Roadside Assistance</h2>
      <p class="mb-4">At WS Mobility, we offer 24/7 roadside assistance to ensure you're never left stranded. Our team of trained professionals is always ready to help, whether you're in the city or on a highway. We understand that vehicle problems can happen at any time, and we're committed to providing quick and reliable service.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Benefits of Our Service</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>24/7 availability</li>
        <li>Fast response times</li>
        <li>Trained and certified technicians</li>
        <li>Comprehensive coverage across Bihar</li>
        <li>Affordable pricing</li>
        <li>Multiple service options</li>
      </ul>
      
      <p class="mb-4">Don't wait until you're stranded. Learn more about our roadside assistance services and how they can provide you with peace of mind on every journey.</p>
    `
  },
  {
    id: 4,
    title: "Sustainable Mobility Solutions for Modern India",
    excerpt: "Exploring sustainable transportation options and how they contribute to a greener future for India.",
    author: "WS Mobility Team",
    date: "2023-12-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    category: "Sustainability",
    content: `
      <p class="mb-4">As India continues to grow and urbanize, the need for sustainable mobility solutions has never been more critical. With increasing concerns about air quality, climate change, and urban congestion, the transportation sector is undergoing a significant transformation.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Challenge</h2>
      <p class="mb-4">India's transportation sector is one of the largest contributors to greenhouse gas emissions. With millions of vehicles on the road and the number growing every year, finding sustainable alternatives is essential for the country's environmental and economic future.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Electric Vehicles: The Solution</h2>
      <p class="mb-4">Electric vehicles represent one of the most promising solutions to India's mobility challenges. They produce zero direct emissions, have lower operating costs, and can be powered by renewable energy sources. The Indian government has set ambitious targets for EV adoption, aiming for 30% of all vehicles to be electric by 2030.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Public Transportation</h2>
      <p class="mb-4">Improving and expanding public transportation systems is another crucial aspect of sustainable mobility. Efficient public transit can reduce the number of private vehicles on the road, decrease congestion, and lower overall emissions.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Shared Mobility</h2>
      <p class="mb-4">Car-sharing and bike-sharing programs are gaining popularity in Indian cities. These services allow people to use vehicles when needed without the cost and responsibility of ownership, reducing the total number of vehicles on the road.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">WS Mobility's Commitment</h2>
      <p class="mb-4">At WS Mobility, we're committed to providing sustainable mobility solutions that meet the needs of modern India. Our range of electric vehicles, combined with our comprehensive services, helps reduce environmental impact while improving accessibility and convenience.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Future</h2>
      <p class="mb-4">The future of mobility in India is sustainable, electric, and accessible. By embracing new technologies and innovative business models, we can create a transportation system that serves everyone while protecting our environment for future generations.</p>
    `
  },
  {
    id: 5,
    title: "WS Services: Your One-Stop Mobility Solution",
    excerpt: "Learn about the comprehensive range of services offered by WS Mobility and how we're revolutionizing transportation in Bihar.",
    author: "WS Mobility Team",
    date: "2023-12-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
    category: "Company News",
    content: `
      <p class="mb-4">WS Mobility is more than just a vehicle dealership. We're a comprehensive mobility solutions provider, offering a wide range of services designed to meet all your transportation needs under one roof.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Our Services</h2>
      
      <h3 class="text-xl font-semibold text-white mt-6 mb-3">Vehicle Sales</h3>
      <p class="mb-4">We offer a diverse range of vehicles including electric cars, e-bikes, and traditional vehicles. Our expert team helps you find the perfect vehicle that matches your needs, budget, and lifestyle.</p>
      
      <h3 class="text-xl font-semibold text-white mt-6 mb-3">Maintenance & Service</h3>
      <p class="mb-4">Our state-of-the-art service centers are equipped with the latest tools and staffed by certified technicians. We offer regular maintenance, repairs, and servicing for all types of vehicles.</p>
      
      <h3 class="text-xl font-semibold text-white mt-6 mb-3">Roadside Assistance</h3>
      <p class="mb-4">Never get stranded again with our 24/7 roadside assistance service. Whether it's a flat tire, dead battery, or mechanical issue, we're just a call away.</p>
      
      <h3 class="text-xl font-semibold text-white mt-6 mb-3">Contract Services</h3>
      <p class="mb-4">For businesses and fleet operators, we offer comprehensive contract services including vehicle leasing, maintenance contracts, and fleet management solutions.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Why Choose WS Mobility?</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Comprehensive service portfolio</li>
        <li>Expert team with years of experience</li>
        <li>Genuine parts and quality service</li>
        <li>Competitive pricing</li>
        <li>Customer-first approach</li>
        <li>Strong presence across Bihar</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Our Vision</h2>
      <p class="mb-4">We envision a future where mobility is accessible, sustainable, and convenient for everyone. Through our comprehensive services and commitment to excellence, we're working to make this vision a reality in Bihar and beyond.</p>
      
      <p class="mb-4">Visit us today to experience the WS Mobility difference. We're here to serve all your mobility needs with professionalism, expertise, and a genuine commitment to your satisfaction.</p>
    `
  },
  {
    id: 6,
    title: "Tips for Choosing the Right E-Bike",
    excerpt: "A comprehensive guide to help you choose the perfect electric bike that fits your needs and lifestyle.",
    author: "WS Mobility Team",
    date: "2023-12-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
    category: "Electric Vehicles",
    content: `
      <p class="mb-4">Electric bikes, or e-bikes, are becoming increasingly popular as a sustainable and convenient mode of transportation. With so many options available, choosing the right e-bike can be overwhelming. This guide will help you make an informed decision.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Determine Your Needs</h2>
      <p class="mb-4">Before shopping for an e-bike, consider how you'll use it:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Daily commuting to work or school</li>
        <li>Recreational riding on weekends</li>
        <li>Off-road adventures</li>
        <li>Carrying groceries or cargo</li>
        <li>Long-distance touring</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Battery and Range</h2>
      <p class="mb-4">The battery is one of the most important components of an e-bike. Consider:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Battery capacity (measured in watt-hours)</li>
        <li>Estimated range on a single charge</li>
        <li>Charging time</li>
        <li>Battery placement and weight</li>
        <li>Removability for charging</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Motor Type and Power</h2>
      <p class="mb-4">E-bikes typically have motors in three locations:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Hub motors:</strong> Located in the front or rear wheel, simple and reliable</li>
        <li><strong>Mid-drive motors:</strong> Located at the pedals, better for hills and off-road</li>
        <li><strong>All-wheel drive:</strong> Motors in both wheels, maximum power and traction</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Frame and Build Quality</h2>
      <p class="mb-4">Look for:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Frame material (aluminum, carbon fiber, steel)</li>
        <li>Weight of the bike</li>
        <li>Build quality and durability</li>
        <li>Warranty coverage</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Test Ride</h2>
      <p class="mb-4">Always test ride an e-bike before purchasing. Pay attention to:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Comfort and fit</li>
        <li>Handling and stability</li>
        <li>Motor responsiveness</li>
        <li>Brake performance</li>
        <li>Overall ride quality</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Price and Value</h2>
      <p class="mb-4">E-bikes range from affordable to premium. Consider:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Your budget</li>
        <li>Features included</li>
        <li>Warranty and service support</li>
        <li>Resale value</li>
        <li>Total cost of ownership</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">WS Mobility E-Bikes</h2>
      <p class="mb-4">At WS Mobility, we offer a wide selection of high-quality e-bikes from trusted manufacturers. Our expert team can help you find the perfect e-bike that matches your needs, budget, and riding style. Visit us today to explore our collection and take a test ride!</p>
    `
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/blog")}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <ScrollToTopButton />
      <ParentNav />

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </button>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div
          className="blog-content text-gray-300 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Share this article</h3>
              <p className="text-gray-400">Help others discover this content</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleShare("facebook")}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} className="text-green-400" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Share on Twitter"
              >
                <Twitter size={20} className="text-green-400" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={20} className="text-green-400" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts or CTA */}
      <div className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore More Articles
          </h2>
          <p className="text-gray-300 mb-6">
            Discover more insights and updates from WS Mobility
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition duration-300 font-semibold"
          >
            View All Posts
          </button>
        </div>
      </div>

      <ParentFooter />
    </div>
  );
};

export default BlogDetail;


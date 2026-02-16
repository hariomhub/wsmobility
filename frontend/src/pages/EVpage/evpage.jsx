import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Target, DollarSign, Award, Megaphone, Headphones, ExternalLink, Factory, Zap, Plus, Shield, Smartphone, Wrench, Leaf, Calculator, MapPin, Phone, Mail, MessageCircle, Star, CheckCircle, ArrowRight, Menu, X, Gauge, Battery, Activity, Info, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from "motion/react";
import bike1 from "../../assets/bike1.png";
import bike2 from "../../assets/bike2.png";
import bike3 from "../../assets/bike3.png";
import bike4 from "../../assets/bike4.png";
import bike5 from "../../assets/bike5.png";
import bike6 from "../../assets/bike6.png";
import bike7 from "../../assets/bike7.png";
import bike8 from "../../assets/bike8.png";
import bike9 from "../../assets/bike9.png";
import EvNavbar from '../../components/navbar/evNav';
import EVMarket from './evmarket';
import WhatWeProvide from './whatweprovide';
import Sendmsg from './sendmsg';
import ScrollToTopButton from '../../utils/ScrollToTopButton';

const EVLandingPage = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/evdealership');
    }
    const handleExploreClick = () => {
        navigate('/evbikemodels');
    }

    const address = "Engtian Electric Bike Pvt Ltd - Gut No 35, Nk E-Bike, Village -Dhotre Bk, Block - Parner, Ahmednagar, Maharashtra 414304";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1); // remove #
            const section = document.getElementById(id);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 0);
            }
        }
    }, [location]);

    const [selectedModel, setSelectedModel] = useState(null);
    const [productIndex, setProductIndex] = useState(0);

    const models = [
        {
            id: 1,
            name: "X LENT WS1",
            image: bike1,
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 2,
            name: "X LENT WS+",
            image: bike2,
            motor: "1500W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 3,
            name: "SOLO WS1",
            image: bike3,
            motor: "1000W (Brushless DC motor, waterproof)",
            controller: "48/60/72V",
            speed: "25kmph",
            wheels: "Alloy / Iron",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "180 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 4,
            name: "DUO WS1",
            image: bike4,
            motor: "1000W (Brushless DC motor, waterproof)",
            controller: "48/60/72V",
            speed: "25kmph",
            wheels: "Alloy / Iron",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "180 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 5,
            name: "SWIFT WS+",
            image: bike5,
            motor: "1400W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 6,
            name: "SWIFT WS1",
            image: bike6,
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "Alloy, 12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 7,
            name: "SWIFT WS PRO",
            image: bike7,
            motor: "1400W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 8,
            name: "VISTO WS1",
            image: bike8,
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        },
        {
            id: 9,
            name: "VISTO WS+",
            image: bike9,
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "25kmph",
            wheels: "Alloy, 12''/12''",
            brake: "Front Disc / Rear Drum",
            dimension: "1800*780*1150",
            limitedWeight: "220 Kg",
            chassis: "High Strength Tubular Frame",
            lightDisplay: "DRL Light, Digital LED Speedometer",
            features: [
                "Remote Key", "DRLs", "Mat", "Footrest", "USB",
                "3 Speed", "Reverse Gears", "LED Headlight",
                "Cruise Control", "Anti theft alarm"
            ]
        }
    ];

    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Fastest-Growing EV Brand in India',
            description: 'Partner with India\'s rapidly expanding electric mobility leader. Our strong presence across two-wheeler and three-wheeler segments creates high market demand, ensuring consistent customer interest and sales opportunities for your dealership.'
        },
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: 'Low Investment, High Returns',
            description: 'Launch your EV dealership with minimal upfront investment while enjoying industry-best profit margins on every sale. Our optimized business model ensures quick ROI and sustainable profitability from day one.'
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: 'Proven Marketing & Sales Support',
            description: 'Eliminate guesswork with our comprehensive marketing ecosystem. From targeted digital campaigns to effective on-ground activations, we provide proven strategies that generate qualified leads and drive conversions consistently.'
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Strong Brand Recall',
            description: 'Leverage our established brand recognition and growing customer base to accelerate your sales process. WS Mobility\'s trusted reputation makes customer acquisition faster and easier, reducing your sales cycle significantly.'
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: '100% Dealer-Centric Model',
            description: 'Experience true partnership with complete transparency. No hidden charges, no forced inventory, and no unrealistic targets. Our success is directly tied to your growth, ensuring mutual profitability and long-term business sustainability.'
        },
        {
            icon: <Headphones className="w-8 h-8" />,
            title: 'Dedicated After-Sales Support',
            description: 'Ensure customer satisfaction and loyalty with our comprehensive service infrastructure. Complete access to genuine spares, technical support, and service training keeps your customers happy and generates repeat business opportunities.'
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Motors',
            role: 'Authorized Dealer, Mumbai',
            text: 'Partnership with WS Mobility transformed our business. 40% increase in monthly sales within 6 months!',
            rating: 5,
            date: '2024-01-15'
        },
        {
            id: 2,
            name: 'Green Wheels Dealership',
            role: 'State Distributor, Bihar',
            text: 'The support system is unparalleled. From branding to technical training, they guide you at every step.',
            rating: 5,
            date: '2024-01-20'
        },
        {
            id: 3,
            name: 'Eco Drive Solutions',
            role: 'Retail Partner, Bangalore',
            text: 'Customer response to WS models is amazing. The build quality and range are the best in this segment.',
            rating: 4,
            date: '2024-02-05'
        },
        {
            id: 4,
            name: 'Maheshwari EV Hub',
            role: 'Exclusive Dealer, Pune',
            text: 'We reached our break-even point in just 4 months. The ROI is significantly higher than other brands we evaluated.',
            rating: 5,
            date: '2024-02-12'
        },
        {
            id: 5,
            name: 'Bharat Electric',
            role: 'Multi-brand Outlet, Delhi',
            text: 'Even though we sell other brands, WS Mobility bikes are our top performers in the premium segment.',
            rating: 5,
            date: '2024-02-18'
        }
    ];

    const [itemsPerView, setItemsPerView] = useState(3);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [testimonialItemsPerView, setTestimonialItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
                setTestimonialItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
                setTestimonialItemsPerView(2);
            } else {
                setItemsPerView(3);
                setTestimonialItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextProduct = () => {
        const totalSlides = Math.ceil(models.length / itemsPerView);
        const currentSlide = Math.floor(productIndex / itemsPerView);
        if (currentSlide < totalSlides - 1) {
            setProductIndex(prev => prev + itemsPerView);
        } else {
            setProductIndex(0);
        }
    };

    const prevProduct = () => {
        const currentSlide = Math.floor(productIndex / itemsPerView);
        if (currentSlide > 0) {
            setProductIndex(prev => prev - itemsPerView);
        } else {
            const totalSlides = Math.ceil(models.length / itemsPerView);
            setProductIndex((totalSlides - 1) * itemsPerView);
        }
    };

    const totalProductSlides = Math.ceil(models.length / itemsPerView);
    const currentProductSlide = Math.floor(productIndex / itemsPerView);

    const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialItemsPerView);
    const currentTestimonialSlide = Math.floor(testimonialIndex / testimonialItemsPerView);

    const nextTestimonial = () => {
        if (currentTestimonialSlide < totalTestimonialSlides - 1) {
            setTestimonialIndex(prev => prev + testimonialItemsPerView);
        } else {
            setTestimonialIndex(0);
        }
    };

    const prevTestimonial = () => {
        if (currentTestimonialSlide > 0) {
            setTestimonialIndex(prev => prev - testimonialItemsPerView);
        } else {
            setTestimonialIndex((totalTestimonialSlides - 1) * testimonialItemsPerView);
        }
    };

    // Auto-scroll for testimonials
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, [currentTestimonialSlide, totalTestimonialSlides]);


    return (
        <div className="min-h-screen bg-white">
            {/* back Scroller */}
            <ScrollToTopButton />

            {/* Navigation */}
            <EvNavbar />

            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: "url('assets/bg-bike.jpeg')",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center ",
                    backgroundRepeat: "no-repeat"
                }}
                className="pt-40 bg-green-100 relative z-0"
            >

                <div className="absolute inset-0 bg-black bg-opacity-55 z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-white mb-4">
                            <span className="block">The Future.</span>
                            <span className="block text-[#32CD32]">Is Electric.</span>
                            <span className="block">Is Here.</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 px-4">
                            Join India's fastest-growing electric vehicle brand. <br />Exclusive dealership opportunities with attractive margins and comprehensive support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <button
                                onClick={handleOnClick}
                                className="px-6 sm:px-8 py-3 text-base sm:text-lg bg-[#2EB82E] text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                                Apply For Dealership
                            </button>
                            <button
                                onClick={handleExploreClick}
                                className=" flex px-6 sm:px-8 py-3 text-base sm:text-lg border border-green-700 text-green-700 bg-white bg-opacity-90 rounded-lg hover:bg-opacity-100 transition-colors font-semibold"
                            >
                                <Phone className='mr-2' />
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Models */}
            <section id="product-portfolio" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="md:text-5xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
                        <p className="text-gray-600 text-2xl max-w-2xl mx-auto">High-demand electric vehicles with attractive profit margins</p>
                    </div>

                    <div className="relative pt-8">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{
                                    transform: `translateX(-${currentProductSlide * 100}%)`
                                }}
                            >
                                {Array.from({ length: totalProductSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                                            {models
                                                .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                                                .map((model) => (
                                                    <div
                                                        key={model.id}
                                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col h-full"
                                                        onClick={() => setSelectedModel(model)}
                                                    >
                                                        {/* Product Image */}
                                                        <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                                            <img
                                                                src={model.image}
                                                                alt={model.name}
                                                                className="w-full h-full object-contain p-6 transition-transform duration-500 hover:scale-110"
                                                            />
                                                            <div className="absolute top-4 left-4">
                                                                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
                                                                    Premium
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Product Details */}
                                                        <div className="p-6 flex flex-col flex-grow">
                                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.name}</h3>

                                                            <div className="space-y-4 mb-6 flex-grow">
                                                                <div className="flex items-center gap-3 text-gray-700">
                                                                    <div className="p-2 bg-green-50 rounded-lg">
                                                                        <Zap size={18} className="text-green-600" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-500 uppercase font-semibold">Motor</p>
                                                                        <p className="font-bold text-sm truncate max-w-[150px]">{model.motor}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-3 text-gray-700">
                                                                    <div className="p-2 bg-blue-50 rounded-lg">
                                                                        <Gauge size={18} className="text-blue-600" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-500 uppercase font-semibold">Speed</p>
                                                                        <p className="font-bold text-sm">{model.speed}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-3 text-gray-700">
                                                                    <div className="p-2 bg-purple-50 rounded-lg">
                                                                        <Battery size={18} className="text-purple-600" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-gray-500 uppercase font-semibold">Controller</p>
                                                                        <p className="font-bold text-sm">{model.controller}</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedModel(model);
                                                                }}
                                                                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-bold flex items-center justify-center gap-2 group mt-auto"
                                                            >
                                                                View Full Specs
                                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {totalProductSlides > 1 && (
                            <>
                                <button
                                    onClick={prevProduct}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-4 shadow-xl text-gray-800 hover:text-green-600 transition-all z-10 border border-gray-100 hover:scale-110"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextProduct}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-4 shadow-xl text-gray-800 hover:text-green-600 transition-all z-10 border border-gray-100 hover:scale-110"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: totalProductSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setProductIndex(index * itemsPerView)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentProductSlide === index ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Explore Models */}
            <section id='models' className="bg-white py-16 pt-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden" style={{ boxShadow: '0 0 50px rgba(0, 0, 0, 0.1), 0 25px 50px rgba(0, 0, 0, 0.15)' }}>
                        <div className="relative overflow-hidden">
                            {/* Soft Animated Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-emerald-100/20 to-teal-100/30">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
                                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full translate-x-48 translate-y-48 animate-pulse delay-700"></div>
                                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-200/15 rounded-full animate-bounce delay-300"></div>
                                <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-green-300/10 rounded-full animate-pulse delay-1000"></div>
                            </div>

                            {/* Geometric Patterns */}
                            <div className="absolute inset-0 opacity-60">
                                <svg className="w-full h-full" viewBox="0 0 400 200">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                                            <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.2" />
                                        </linearGradient>
                                        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#059669" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,100 Q100,60 200,100 T400,100" stroke="url(#lineGradient)" strokeWidth="3" fill="none" />
                                    <path d="M0,130 Q150,80 300,130 T400,130" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                                    <path d="M0,70 Q200,40 400,70" stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" />
                                    <circle cx="80" cy="70" r="5" fill="url(#circleGradient)">
                                        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="320" cy="130" r="4" fill="url(#circleGradient)">
                                        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="200" cy="50" r="3" fill="url(#circleGradient)">
                                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="4s" repeatCount="indefinite" />
                                    </circle>
                                </svg>
                            </div>

                            {/* Main Content */}
                            <div className="relative z-10 px-8 py-8 text-center">
                                <div className="relative inline-block mb-8">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-3xl blur-xl transform rotate-6"></div>
                                    <div className="relative bg-white/40 backdrop-blur-md border border-green-200/30 rounded-3xl p-6 shadow-lg">
                                        <div className="flex items-center justify-center space-x-3">
                                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
                                    Discover Our
                                    <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        Complete Collection
                                    </span>
                                </h2>

                                <p className="text-slate-600 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                                    From urban commuters to performance riders, explore our full range of cutting-edge electric bikes crafted for the future of mobility.
                                </p>

                                {/* CTA Button */}
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-lg transform scale-110"></div>
                                    <button
                                        onClick={handleExploreClick}
                                        className="relative group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-500 shadow-xl border border-white/20 flex items-center gap-4"
                                    >
                                        <span className="relative">
                                            Explore All Models
                                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
                                        </span>

                                        <div className="relative">
                                            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                                        </div>
                                    </button>
                                </div>

                                {/* Badge */}
                                <div className="mt-8 inline-flex items-center gap-3 bg-white/50 backdrop-blur-sm border border-green-200/30 rounded-full px-6 py-3 shadow-sm">
                                    <div className="flex -space-x-2">
                                        <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-sm"></div>
                                        <div className="w-3 h-3 bg-teal-400 rounded-full border-2 border-white shadow-sm"></div>
                                    </div>
                                    <span className="text-slate-600 text-sm font-medium">15+ Premium Models</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="why-partner" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose WS Mobility?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-semibold font-poppins">Join our growing network of successful EV dealerships and unlock exceptional business opportunities</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 text-center p-8 rounded-2xl shadow-lg">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl"></div>
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-emerald-500 rounded-b-full"></div>
                                <div className="relative z-10 transform group-hover:-translate-y-2 transition-all duration-500">

                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 group-hover:bg-white/20 rounded-2xl mb-6 text-emerald-600 group-hover:text-white shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {benefit.icon}
                                    </div>

                                    <h3 className="text-xl font-poppins font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-700 group-hover:text-gray-100 leading-relaxed transition-colors duration-500">
                                        {benefit.description}
                                    </p>
                                </div>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
                                            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                                        backgroundSize: '30px 30px'
                                    }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <EVMarket />
            <WhatWeProvide />
            {/* manufacturing */}
            <div className="min-h-screen bg-emerald-100 pt-8 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center mb-6">
                            <div className="bg-white p-1 rounded-full shadow-lg">
                                <img src='assets/parentCompanyLogo1.png' alt='ws-logo' className='w-32 h-32' />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Manufacturing Hub</h1>
                        <div className="w-80 h-1 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                            <img src='assets/manufacturing.png' className='w-160' alt='Manufacturing hub facility' />
                        </div>

                        <div className="p-8 lg:p-12">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Company Info */}
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                                            <Factory className="w-8 h-8 text-green-600" />
                                            Manufacturing Excellence
                                        </h2>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Our cutting-edge manufacturing facility represents the pinnacle of electric bike production technology.
                                            With advanced assembly lines and quality control systems, we ensure every vehicle meets the highest standards.
                                        </p>
                                    </div>

                                    {/* Company Details Card */}
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Details</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 text-lg font-semibold">Engtian Electric Bike Pvt Ltd</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Gut No 35, NK E-Bike</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Village - Dhotre Bk, Block - Parner</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Ahmednagar, Maharashtra 414304</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Production Capacity</h4>
                                            <p className="text-gray-600 text-sm">High-volume manufacturing</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Quality Control</h4>
                                            <p className="text-gray-600 text-sm">ISO certified processes</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4  border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Technology</h4>
                                            <p className="text-gray-600 text-sm">Advanced automation</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4  border-green-500">
                                            <h4 className="font-bold text-gray-800 text-base mb-1">Sustainability</h4>
                                            <p className="text-gray-600 text-sm">Eco-friendly operations</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Location & Map */}
                                <div className="space-y-8">
                                    {/* Location Card */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                                        <div className="flex items-center gap-3 mb-6">
                                            <MapPin className="w-8 h-8 text-green-800" />
                                            <h3 className="text-2xl font-bold text-gray-800">Our Location</h3>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                                <h4 className="font-semibold text-gray-800 mb-2">Complete Address</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">
                                                    Engtian Electric Bike Pvt Ltd<br />
                                                    Gut No 35, NK E-Bike<br />
                                                    Village - Dhotre Bk, Block - Parner<br />
                                                    Ahmednagar, Maharashtra 414304
                                                </p>
                                            </div>
                                        </div>

                                        {/* Google Maps Button */}
                                        <a
                                            href={googleMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group w-full justify-center"
                                        >
                                            <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                                            View on Google Maps
                                            <ExternalLink className="w-4 h-4" />
                                        </a>

                                        <p className="text-gray-500 text-sm text-center mt-3">
                                            Get directions and explore our facility location
                                        </p>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
                                        <h4 className="font-bold text-lg text-gray-800 mb-4">Visit Our Facility</h4>
                                        <div className="space-y-3 text-base">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-gray-700">Manufacturing tours available</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-gray-700">Business partnerships welcome</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                                <span className="text-gray-700">Strategic location in Maharashtra</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Contact */}
            {/* Success Stories Section */}
            <section id='success-stories' className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-lg animate-bounce delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                                Success Stories
                            </h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Empowering entrepreneurs across India to build a sustainable and profitable future in electric mobility.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden py-4">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentTestimonialSlide * 100}%)`
                                }}
                            >
                                {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                                    <div key={slideIndex} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                                            {testimonials
                                                .slice(slideIndex * testimonialItemsPerView, (slideIndex + 1) * testimonialItemsPerView)
                                                .map((testimonial) => (
                                                    <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl hover:border-green-300 transition-all duration-300 group">
                                                        <div className="flex items-center gap-1 mb-6">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={18}
                                                                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'} transition-colors`}
                                                                />
                                                            ))}
                                                        </div>
                                                        <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">
                                                            "{testimonial.text}"
                                                        </p>
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                                                                {testimonial.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                                <p className="text-sm text-green-600">{testimonial.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {totalTestimonialSlides > 1 && (
                            <>
                                <button
                                    onClick={prevTestimonial}
                                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white text-gray-900 p-4 rounded-full shadow-2xl hover:bg-green-600 hover:text-white transition-all z-20"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white text-gray-900 p-4 rounded-full shadow-2xl hover:bg-green-600 hover:text-white transition-all z-20"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Pagination Dots */}
                    {totalTestimonialSlides > 1 && (
                        <div className="flex justify-center mt-12 gap-3">
                            {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setTestimonialIndex(index * testimonialItemsPerView)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonialSlide === index ? 'bg-green-600 w-8' : 'bg-green-200'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Sendmsg />

            {/* Detailed Modal */}
            <AnimatePresence>
                {selectedModel && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
                        onClick={() => setSelectedModel(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-grow overflow-hidden flex flex-col">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedModel(null)}
                                    className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-20 shadow-lg"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Modal Content */}
                                <div className="grid md:grid-cols-2 gap-0 flex-grow overflow-hidden text-sm">
                                    {/* Left Side - Image */}
                                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center h-[300px] md:h-full flex-shrink-0">
                                        <img
                                            src={selectedModel.image}
                                            alt={selectedModel.name}
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </div>

                                    {/* Right Side - Specifications */}
                                    <div className="p-8 overflow-y-auto custom-scrollbar flex-grow bg-white" style={{ scrollbarWidth: 'thin', scrollbarColor: '#166534 #f3f4f6' }}>
                                        <div className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block shadow-md">
                                            {selectedModel.name}
                                        </div>

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    <span className="text-xs text-gray-400 block mb-1 font-bold">MOTOR</span>
                                                    <p className="font-semibold text-gray-900 text-xs">{selectedModel.motor}</p>
                                                </div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    <span className="text-xs text-gray-400 block mb-1 font-bold">CONTROLLER</span>
                                                    <p className="font-semibold text-gray-900">{selectedModel.controller}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    <span className="text-xs text-gray-400 block mb-1 font-bold">SPEED</span>
                                                    <p className="font-semibold text-gray-900">{selectedModel.speed}</p>
                                                </div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    <span className="text-xs text-gray-400 block mb-1 font-bold">WHEELS</span>
                                                    <p className="font-semibold text-gray-900">{selectedModel.wheels}</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                <span className="text-xs text-gray-400 block mb-1 font-bold">BRAKE</span>
                                                <p className="font-semibold text-gray-900">{selectedModel.brake}</p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    <span className="text-xs text-gray-400 block mb-1 font-bold">DIMENSION</span>
                                                    <p className="font-semibold text-gray-900">{selectedModel.dimension}</p>
                                                </div>
                                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                    <span className="text-xs text-gray-400 block mb-1 font-bold">LOAD WEIGHT</span>
                                                    <p className="font-semibold text-gray-900">{selectedModel.limitedWeight}</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                <span className="text-xs text-gray-400 block mb-1 font-bold">CHASSIS</span>
                                                <p className="font-semibold text-gray-900">{selectedModel.chassis}</p>
                                            </div>

                                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                                <span className="text-xs text-gray-400 block mb-1 font-bold">LIGHT & DISPLAY</span>
                                                <p className="font-semibold text-gray-900">{selectedModel.lightDisplay}</p>
                                            </div>

                                            <div className="bg-green-50 p-4 rounded-xl border border-green-200 shadow-sm">
                                                <span className="text-xs text-green-700 block mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <Shield size={14} /> Premium Features
                                                </span>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {selectedModel.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 bg-white/50 p-1.5 rounded-lg border border-green-100">
                                                            <Activity size={12} className="text-green-600" />
                                                            <span className="text-xs font-medium text-gray-800">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}
export default EVLandingPage; 
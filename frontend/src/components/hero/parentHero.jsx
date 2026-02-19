import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Car,
    Cpu,
    Cog,
    Wrench,
    Clock,
    Users,
    ChevronRight,
    ChevronLeft,
    Check,
    Phone,
    Mail,
    MapPin,
    Target,
    Layers,
    Bike,
    Settings,
    Zap,
    Award,
    Smile,
    TrendingUp,
    Info,
    Thermometer,
    Weight,
    Activity,
    X,
    Star,
    Plus
} from 'lucide-react';

import biharLogo from "../../assets/bihar.png";
import iimLogo from "../../assets/iim.png";
import iitLogo from "../../assets/iit.png";
import msmeLogo from "../../assets/msme.png";
import startupLogo from "../../assets/startup.png";
import battery1 from "../../assets/battery1.jpeg";
import battery2 from "../../assets/battery2.jpeg";
import bike1 from "../../assets/bike1.png";
import bike2 from "../../assets/bike2.png";
import bike3 from "../../assets/bike3.png";
import bike4 from "../../assets/bike4.png";
import bike5 from "../../assets/bike5.png";
import bike6 from "../../assets/bike6.png";
import bike7 from "../../assets/bike7.png";
import bike8 from "../../assets/bike8.png";
import bike9 from "../../assets/bike9.png";

import reachus from "../../assets/reachus.jpg";


const ParentHero = () => {
    const [rotation, setRotation] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: 'assets/workshop.jpg', alt: 'Workshop' },
        { src: 'assets/ev-01.jpg', alt: 'EV Section' },
        { src: 'assets/delivery.jpg', alt: 'Delivery' },
        { src: 'assets/collect.jpg', alt: 'Collection' },
        { src: 'assets/manufacturing.png', alt: 'Manufacturing' },
        { src: 'assets/bike-photos/IMG-20250402-WA0004.jpg', alt: 'Team' }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoverCar, setHoverCar] = useState(false);
    const [hoverBike, setHoverBike] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const carouselRef = useRef(null);
    const logos = [
        { id: 1, name: 'bike1', src: 'assets/bike-photos/bike1.png' },
        { id: 2, name: 'bike1', src: 'assets/bike-photos/bike2.png' },
        { id: 3, name: 'bike1', src: 'assets/bike-photos/bike3.png' },
        { id: 4, name: 'bike1', src: 'assets/bike-photos/bike4.png' },
        { id: 5, name: 'bike1', src: 'assets/bike-photos/bike5.png' },
        { id: 6, name: 'bike1', src: 'assets/bike-photos/bike6.png' },
        { id: 7, name: 'bike1', src: 'assets/bike-photos/bike7.png' },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const batteries = [
        {
            id: 1,
            model: "48V 30Ah Lithium Battery",
            voltage: "48V",
            capacity: "30Ah",
            energy: "1440 Wh (1.44 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "1500+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery1,
            category: "2wheel",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 2,
            model: "48V 45Ah Lithium Battery",
            voltage: "48V",
            capacity: "45Ah",
            energy: "2160 Wh (2.16 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "1500+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery2,
            category: "2wheel",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 3,
            model: "48V 50Ah Lithium Battery",
            voltage: "48V",
            capacity: "50Ah",
            energy: "2400 Wh (2.4 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "1500+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery1,
            category: "2wheel",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 4,
            model: "60V 30Ah Lithium Battery",
            voltage: "60V",
            capacity: "30Ah",
            energy: "1800 Wh (1.8 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "2000+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery2,
            category: "2wheel",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 5,
            model: "60V 45Ah Lithium Battery",
            voltage: "60V",
            capacity: "45Ah",
            energy: "2700 Wh (2.7 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "2000+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery1,
            category: "2wheel",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 6,
            model: "60V 50Ah Lithium Battery",
            voltage: "60V",
            capacity: "50Ah",
            energy: "3000 Wh (3.0 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "2000+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery2,
            category: "2wheel",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 7,
            model: "48V 100Ah Lithium Battery",
            voltage: "48V",
            capacity: "100Ah",
            energy: "4800 Wh (4.8 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "1500+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery1,
            category: "3wheeler",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 8,
            model: "48V 150Ah Lithium Battery",
            voltage: "48V",
            capacity: "150Ah",
            energy: "7200 Wh (7.2 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "1500+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery2,
            category: "3wheeler",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        },
        {
            id: 9,
            model: "48V 200Ah Lithium Battery",
            voltage: "48V",
            capacity: "200Ah",
            energy: "9600 Wh (9.6 kWh)",
            chemistry: "Lithium Iron Phosphate (LiFePO4 / LFP)",
            cellType: "Cylindrical, Spot Welded",
            cycleLife: "1500+ cycles",
            batteryType: "Metal Casing",
            features: ["High safety", "Long life", "Thermal stability", "Customizable size"],
            image: battery1,
            category: "3wheeler",
            type: "Battery",
            contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
        }
    ];

    const scooters = [
        {
            id: 101, // Adjusted ID to avoid conflict
            name: "X LENT WS1",
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "55Kmph",
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
            ],
            image: bike1,
            type: "Scooter"
        },
        {
            id: 102,
            name: "X LENT WS+",
            motor: "1500W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "55Kmph",
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
            ],
            image: bike2,
            type: "Scooter"
        },
        {
            id: 103,
            name: "SOLO WS1",
            motor: "1000W (Brushless DC motor, waterproof)",
            controller: "48/60/72V",
            speed: "45Kmph",
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
            ],
            image: bike3,
            type: "Scooter"
        },
        {
            id: 104,
            name: "DUO WS1",
            motor: "1000W (Brushless DC motor, waterproof)",
            controller: "48/60/72V",
            speed: "45Kmph",
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
            ],
            image: bike4,
            type: "Scooter"
        },
        {
            id: 5,
            name: "SWIFT WS+",
            motor: "1400W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "45Kmph",
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
            ],
            image: bike5,
            type: "Scooter"
        },
        {
            id: 106,
            name: "SWIFT WS1",
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "45Kmph",
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
            ],
            image: bike6,
            type: "Scooter"
        },
        {
            id: 107,
            name: "SWIFT WS PRO",
            motor: "1400W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "45Kmph",
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
            ],
            image: bike7,
            type: "Scooter"
        },
        {
            id: 108,
            name: "VISTO WS1",
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "55Kmph",
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
            ],
            image: bike8,
            type: "Scooter"
        },
        {
            id: 109,
            name: "VISTO WS+",
            motor: "1200W (Brushless DC motor, waterproof)",
            controller: "60/72V",
            speed: "45Kmph",
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
            ],
            image: bike9,
            type: "Scooter"
        }
    ];

    const allProducts = [...batteries, ...scooters];


    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollLeft = 0;
                } else {
                    carouselRef.current.scrollLeft += 1;
                }
            }
        }

        const interval = setInterval(scrollCarousel, 10);
        return () => clearInterval(interval);
    }, []);

    // Continuous background rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 0.15) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Initial animation
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Calculate 3D transform based on mouse position relative to card
    const calculate3DTransform = (e, cardId) => {
        if (!e.currentTarget) return;

        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        // Calculate mouse position relative to card center
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;

        // Calculate rotation angles (limited range)
        const rotateY = (mouseX / (cardRect.width / 2)) * 5;
        const rotateX = -(mouseY / (cardRect.height / 2)) * 5;

        setMousePosition({
            x: rotateY,
            y: rotateX,
            cardId: cardId
        });
    };

    const resetTransform = (cardId) => {
        setMousePosition({
            x: 0,
            y: 0,
            cardId: cardId
        });
    };

    // Get 3D transform for a specific card
    const getTransform = (cardId) => {
        if (mousePosition.cardId === cardId) {
            return `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`;
        }
        return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const [hoverBattery, setHoverBattery] = useState(false);

    const [testimonials, setTestimonials] = useState([
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
            role: 'Multi-brand Dealer, Bangalore',
            text: 'Excellent support from WS team. Training programs and marketing assistance helped us become the top dealer in our region.',
            rating: 5,
            date: '2024-01-20'
        },
        {
            id: 3,
            name: 'Speed Zone Motors',
            role: 'Authorized Distributor, Delhi NCR',
            text: 'Started with zero EV knowledge. WS Mobility\'s comprehensive training made us EV experts. ROI exceeded expectations!',
            rating: 5,
            date: '2024-01-25'
        },
        {
            id: 4,
            name: 'City Bike Hub',
            role: 'Franchise Owner, Pune',
            text: 'Low investment, high returns. The dealership model is dealer-friendly with great profit margins.',
            rating: 4,
            date: '2024-02-01'
        },
        {
            id: 5,
            name: 'Electric Avenue',
            role: 'Dealership Partner, Hyderabad',
            text: 'Customer demand for WS bikes is incredible. Inventory moves fast, profits are consistent.',
            rating: 5,
            date: '2024-02-05'
        },
        {
            id: 6,
            name: 'Future Mobility Solutions',
            role: 'Service & Sales Center, Chennai',
            text: 'Technical support is outstanding. Spare parts availability and warranty claims process is seamless.',
            rating: 5,
            date: '2024-02-10'
        }
    ]);

    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [showTestimonialForm, setShowTestimonialForm] = useState(false);
    const [newTestimonial, setNewTestimonial] = useState({
        name: '',
        role: '',
        text: '',
        rating: 5
    });
    const [testimonialItemsPerView, setTestimonialItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setTestimonialItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setTestimonialItemsPerView(2);
            } else {
                setTestimonialItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Testimonial Auto-scroll
    useEffect(() => {
        const timer = setInterval(() => {
            setTestimonialIndex((prevIndex) => {
                const totalSlides = Math.ceil(testimonials.length / testimonialItemsPerView);
                const currentSlide = Math.floor(prevIndex / testimonialItemsPerView);
                if (currentSlide >= totalSlides - 1) {
                    return 0;
                }
                return prevIndex + testimonialItemsPerView;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [testimonials.length, testimonialItemsPerView]);

    const nextTestimonial = () => {
        const totalSlides = Math.ceil(testimonials.length / testimonialItemsPerView);
        const currentSlide = Math.floor(testimonialIndex / testimonialItemsPerView);
        if (currentSlide < totalSlides - 1) {
            setTestimonialIndex(prev => prev + testimonialItemsPerView);
        } else {
            setTestimonialIndex(0);
        }
    };

    const prevTestimonial = () => {
        const currentSlide = Math.floor(testimonialIndex / testimonialItemsPerView);
        if (currentSlide > 0) {
            setTestimonialIndex(prev => prev - testimonialItemsPerView);
        } else {
            const totalSlides = Math.ceil(testimonials.length / testimonialItemsPerView);
            setTestimonialIndex((totalSlides - 1) * testimonialItemsPerView);
        }
    };

    const handleTestimonialInputChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTestimonialRatingChange = (rating) => {
        setNewTestimonial(prev => ({
            ...prev,
            rating
        }));
    };

    const submitTestimonial = () => {
        if (newTestimonial.name && newTestimonial.role && newTestimonial.text) {
            const review = {
                id: testimonials.length + 1,
                ...newTestimonial,
                date: new Date().toISOString().split('T')[0]
            };
            setTestimonials(prev => [review, ...prev]);
            setNewTestimonial({ name: '', role: '', text: '', rating: 5 });
            setShowTestimonialForm(false);
        }
    };

    const totalTestimonialSlides = Math.ceil(testimonials.length / testimonialItemsPerView);
    const currentTestimonialSlide = Math.floor(testimonialIndex / testimonialItemsPerView);

    return (
        <section className="bg-gradient-to-br from-white via-green-50 to-emerald-50 pt-16 sm:pt-20 md:pt-24 lg:pt-8">
            {/* Hero Section */}
            <div
                className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-white"
            >
                {/* Enhanced Overlay - White/Green Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-green-50/70 to-emerald-100/60 z-0"></div>

                {/* Left Recognition Bar - Fixed to Left Screen Edge with Auto-Scroll */}
                <div className="hidden xl:flex flex-col absolute left-0 top-[35%] -translate-y-1/2 h-[500px] py-4 px-5 bg-[#11DE39] backdrop-blur-lg rounded-r-3xl border-y border-r border-green-200/50 shadow-[10px_0_30px_rgba(34,197,94,0.1)] overflow-hidden z-40">
                    <div className="flex flex-col items-center gap-8 animate-scroll-vertical">
                        {/* Original Set */}
                        <div className="group relative">
                            <img src={biharLogo} alt="Bihar" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                            <span className="absolute left-full ml-5 px-3 py-1.5 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-white/10">Bihar Govt</span>
                        </div>
                        <div className="group relative">
                            <img src={startupLogo} alt="Startup" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                            <span className="absolute left-full ml-5 px-3 py-1.5 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-white/10">Startup Bihar</span>
                        </div>
                        <div className="group relative">
                            <img src={iimLogo} alt="IIM" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                            <span className="absolute left-full ml-5 px-3 py-1.5 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-white/10">IIM Incubated</span>
                        </div>
                        <div className="group relative">
                            <img src={iitLogo} alt="IIT" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                            <span className="absolute left-full ml-5 px-3 py-1.5 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-white/10">IIT Patna</span>
                        </div>
                        <div className="group relative">
                            <img src={msmeLogo} alt="MSME" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                            <span className="absolute left-full ml-5 px-3 py-1.5 bg-gray-900/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-xl border border-white/10">MSME Approved</span>
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="group relative">
                            <img src={biharLogo} alt="Bihar" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                        </div>
                        <div className="group relative">
                            <img src={startupLogo} alt="Startup" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                        </div>
                        <div className="group relative">
                            <img src={iimLogo} alt="IIM" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                        </div>
                        <div className="group relative">
                            <img src={iitLogo} alt="IIT" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                        </div>
                        <div className="group relative">
                            <img src={msmeLogo} alt="MSME" className="w-14 h-auto object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                        </div>
                    </div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-green-400/30 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-bl from-green-500/25 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-20 w-full max-w-7xl mx-auto flex">
                    <div className="flex-grow">
                        {/* Title Section */}
                        <div className="text-center mb-8 sm:mb-10 md:mb-10 lg:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
                                <span className="block mb-2 sm:mb-4">Premium EV & Automotive Solutions</span>
                                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    Your Journey, Our Expertise
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-gray-800 max-w-7xl mx-auto leading-relaxed drop-shadow-lg px-4 sm:px-0">
                                Offering exclusive EV dealership opportunities and delivering  <br />top-tier solutions   <span className="font-bold text-green-700">across India</span>
                            </p>
                        </div>

                        {/* Service Cards - 2 Cards in a Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 justify-center items-stretch mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto">
                            {/* EV Vehicle Card */}
                            <div
                                className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 z-20 cursor-pointer transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}
                                style={{ transitionDelay: '300ms' }}
                                onMouseMove={(e) => calculate3DTransform(e, 'bike')}
                                onMouseLeave={() => resetTransform('bike')}
                                onMouseEnter={() => setHoverBike(true)}
                                onMouseOut={() => setHoverBike(false)}
                            >
                                {/* Main card with 3D transform */}
                                <div
                                    className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-300 ease-out"
                                    style={{
                                        transform: getTransform('bike'),
                                        boxShadow: hoverBike ? '0 25px 60px rgba(34, 197, 94, 0.5)' : '0 15px 40px rgba(34, 197, 94, 0.2)',
                                    }}
                                >
                                    {/* Card background with animated gradients */}
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                                        {/* Base gradient - White to Green */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-green-100 to-green-300"></div>

                                        {/* Animated rotating gradient overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-tl from-emerald-200/40 via-green-100/30 to-white/40"
                                            style={{
                                                transform: `rotate(${-rotation}deg)`,
                                                transformOrigin: 'center center',
                                            }}
                                        ></div>

                                        {/* Animated pulse highlight */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-b from-white/20 via-green-200/30 to-white/20 transition-opacity duration-1000 ${hoverBike ? 'opacity-60' : 'opacity-0'}`}
                                            style={{
                                                transformOrigin: 'center center',
                                                backgroundSize: '200% 200%',
                                                backgroundPosition: hoverBike ? 'center' : 'bottom',
                                            }}
                                        ></div>

                                        {/* Active glow effect on hover */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-tr from-green-300/40 to-transparent rounded-2xl sm:rounded-3xl transition-opacity duration-500 ${hoverBike ? 'opacity-100' : 'opacity-0'}`}
                                        ></div>
                                    </div>

                                    {/* Card content */}
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                                        {/* Floating particles effect */}
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                                            {[...Array(8)].map((_, i) => (
                                                <div
                                                    key={`bike-particle-${i}`}
                                                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/40"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`,
                                                        opacity: 0.3 + Math.random() * 0.4,
                                                        transform: `scale(${0.5 + Math.random()})`,
                                                        animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>

                                        {/* Icon with glow effect */}
                                        <div className={`relative mb-4 sm:mb-6 transition-all duration-500 ${hoverBike ? 'scale-110 translate-y-0' : 'scale-100 translate-y-0'}`}>
                                            <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-50 scale-150"></div>
                                            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg p-2 sm:p-3 rounded-full">
                                                <img className="w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-14" src="assets/green-bike-logo.png" alt="ev-bike-logo" />
                                            </div>

                                            {/* Orbiting element */}
                                            <div
                                                className="absolute h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center"
                                                style={{
                                                    transform: `rotate(${-rotation * 2}deg) translateX(${window.innerWidth < 640 ? '40px' : '50px'})`,
                                                    transformOrigin: 'center center',
                                                }}
                                            >
                                                <Zap size={window.innerWidth < 640 ? 12 : 14} className="text-green-600" />
                                            </div>
                                        </div>

                                        {/* Text content with animation */}
                                        <div className="relative z-10 text-center">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-2 sm:mb-3 drop-shadow-md">
                                                EV Vehicle
                                            </h3>

                                            <p className="text-sm sm:text-base text-gray-800 mb-4 sm:mb-5 drop-shadow px-2 leading-relaxed">
                                                Explore our collection of 2W & 3W electric vehicles
                                            </p>

                                            <a
                                                href="/ev-dealership-opportunity"
                                                className={`inline-flex items-center border-2 border-green-600 transition-all duration-500 bg-green-600 hover:bg-green-700 text-white backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm sm:text-base min-h-[44px] ${hoverBike ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}`}
                                            >
                                                <span className="font-bold">Explore Vehicles</span>
                                                <ChevronRight size={window.innerWidth < 640 ? 14 : 16} className="ml-2" />
                                            </a>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                                            <Bike size={window.innerWidth < 640 ? 12 : 14} className={`text-green-600/50 transition-all duration-500 ${hoverBike ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EV Battery Card - New */}
                            <div
                                className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 z-20 cursor-pointer transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'}`}
                                style={{ transitionDelay: '500ms' }}
                                onMouseMove={(e) => calculate3DTransform(e, 'battery')}
                                onMouseLeave={() => resetTransform('battery')}
                                onMouseEnter={() => setHoverBattery(true)}
                                onMouseOut={() => setHoverBattery(false)}
                            >
                                {/* Main card with 3D transform */}
                                <div
                                    className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-300 ease-out"
                                    style={{
                                        transform: getTransform('battery'),
                                        boxShadow: hoverBattery ? '0 25px 60px rgba(16, 185, 129, 0.5)' : '0 15px 40px rgba(16, 185, 129, 0.2)',
                                    }}
                                >
                                    {/* Card background with animated gradients */}
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                                        {/* Base gradient - White to Emerald */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-100 to-emerald-400"></div>

                                        {/* Animated rotating gradient overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-tr from-green-200/40 via-emerald-200/30 to-white/40"
                                            style={{
                                                transform: `rotate(${rotation}deg)`,
                                                transformOrigin: 'center center',
                                            }}
                                        ></div>

                                        {/* Animated pulse highlight */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-t from-white/20 via-emerald-200/30 to-white/20 transition-opacity duration-1000 ${hoverBattery ? 'opacity-60' : 'opacity-0'}`}
                                            style={{
                                                transformOrigin: 'center center',
                                                backgroundSize: '200% 200%',
                                                backgroundPosition: hoverBattery ? 'center' : 'bottom',
                                            }}
                                        ></div>

                                        {/* Active glow effect on hover */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br from-emerald-300/40 to-transparent rounded-2xl sm:rounded-3xl transition-opacity duration-500 ${hoverBattery ? 'opacity-100' : 'opacity-0'}`}
                                        ></div>
                                    </div>

                                    {/* Card content */}
                                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
                                        {/* Floating particles effect */}
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                                            {[...Array(8)].map((_, i) => (
                                                <div
                                                    key={`battery-particle-${i}`}
                                                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500/40"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`,
                                                        opacity: 0.3 + Math.random() * 0.4,
                                                        transform: `scale(${0.5 + Math.random()})`,
                                                        animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>

                                        {/* Icon with glow effect */}
                                        <div className={`relative mb-4 sm:mb-6 transition-all duration-500 ${hoverBattery ? 'scale-110 translate-y-0' : 'scale-100 translate-y-0'}`}>
                                            <div className="absolute inset-0 rounded-full bg-emerald-400 blur-xl opacity-50 scale-150"></div>
                                            <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg p-3 sm:p-4 rounded-full">
                                                <Zap size={window.innerWidth < 640 ? 24 : 28} className="text-white" />
                                            </div>

                                            {/* Orbiting element */}
                                            <div
                                                className="absolute h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center"
                                                style={{
                                                    transform: `rotate(${rotation * 1.5}deg) translateX(${window.innerWidth < 640 ? '40px' : '50px'})`,
                                                    transformOrigin: 'center center',
                                                }}
                                            >
                                                <Settings size={window.innerWidth < 640 ? 12 : 14} className="text-emerald-600" />
                                            </div>
                                        </div>

                                        {/* Text content with animation */}
                                        <div className="relative z-10 text-center">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-900 mb-2 sm:mb-3 drop-shadow-md">
                                                EV Battery
                                            </h3>

                                            <p className="text-sm sm:text-base text-gray-800 mb-4 sm:mb-5 drop-shadow px-2 leading-relaxed">
                                                High-performance batteries for sustainable mobility
                                            </p>

                                            <a
                                                href="/battery"
                                                className={`inline-flex items-center border-2 border-emerald-600 transition-all duration-500 bg-emerald-600 hover:bg-emerald-700 text-white backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-sm sm:text-base min-h-[44px] ${hoverBattery ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}`}
                                            >
                                                <span className="font-bold">View Solutions</span>
                                                <ChevronRight size={window.innerWidth < 640 ? 14 : 16} className="ml-2" />
                                            </a>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                                            <Cpu size={window.innerWidth < 640 ? 12 : 14} className={`text-emerald-600/50 transition-all duration-500 ${hoverBattery ? 'opacity-100 scale-125' : 'opacity-50 scale-100'}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS for floating animation */}
                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px) scale(1); }
                        50% { transform: translateY(-10px) scale(1.1); }
                    }
                    @keyframes scrollVertical {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                    .animate-scroll-vertical {
                        animation: scrollVertical 20s linear infinite;
                    }
                    .animate-scroll-vertical:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </div>



            {/* Logo Carousel Section */}
            <div className="overflow-hidden bg-gradient-to-r from-green-50 via-white to-emerald-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">

                <div
                    ref={carouselRef}
                    className="flex items-center overflow-x-hidden whitespace-nowrap no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseEnter={() => setIsAnimating(true)}
                    onMouseLeave={() => setIsAnimating(false)}
                >
                    {logos.map(logo => (
                        <div key={logo.id} className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-100 hover:scale-110 transition-transform duration-300"
                                style={{ filter: 'none' }}
                            />
                        </div>
                    ))}

                    {/* Duplicate logos to create smooth infinite scroll effect */}
                    {logos.map(logo => (
                        <div key={`duplicate-${logo.id}`} className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-100 hover:scale-110 transition-transform duration-300"
                                style={{ filter: 'none' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* About WS Mobility Section */}
            <div id="aboutwsmobility" className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden py-16 sm:py-24">
                {/* Enhanced Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900 mb-4 drop-shadow-sm">About Us</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-green-600 mx-auto rounded-full"></div>
                        <p className="mt-4 text-green-800 font-semibold text-lg">Premium Services Since 2019</p>
                    </div>

                    {/* Main Story & Vision - Two Column */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-green-100">
                                <h3 className="text-2xl font-bold text-green-700 mb-6 underline decoration-green-400 underline-offset-8">Our Journey</h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    WS Mobility Pvt. Ltd. is a visionary startup founded with the mission to
                                    revolutionize the automobile industry in India. We offer a comprehensive,
                                    one-stop solution for all mobility needs, bridging the gap in automotive service and sales.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    Approved by the Bihar Startups initiative, we are committed to innovation and regional development, delivering high-quality services for cars, bikes, and EVs.
                                </p>

                                <div className="flex items-start bg-green-50/50 p-6 rounded-2xl border-l-4 border-green-500">
                                    <Target className="text-green-600 mr-4 flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="text-xl font-bold text-green-800 mb-2">Our Vision</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Establishing the leading integrated mobility platform in Bihar, driving the adoption of sustainable electric mobility solutions for everyone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <img src="https://media.istockphoto.com/id/1330705612/vector/electric-scooter-and-charging-station-isolated.jpg?s=612x612&w=0&k=20&c=x7C9oJ8lJMh5PGVMQaCMorTRqYLa4YBFbFuyq-FBIiM=" alt="Our Workshop" className="w-full h-[500px] object-contain bg-white" />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-semibold text-xl">State-of-the-art Service Hub</p>
                                </div>
                            </div>
                            {/* Decorative background element */}
                            <div className="absolute -top-6 -right-6 w-full h-full bg-green-200/50 rounded-3xl -z-10"></div>
                        </div>
                    </div>


                    {/* Key Stats Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {[
                            { icon: Award, value: "5+", label: "Years Experience" },
                            { icon: Layers, value: "3+", label: "Core Verticals" },
                            { icon: Smile, value: "2000+", label: "Happy Customers" },
                            { icon: TrendingUp, value: "100%", label: "Growth Rate" }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl group-hover:from-green-500 group-hover:to-emerald-600 transition-colors duration-500">
                                        <stat.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">{stat.value}</h4>
                                        <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Featured Products Showcase - Scooty & Battery */}
                    <div className="mb-24 py-12 relative">
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
                        <h3 className="text-3xl font-bold text-teal-900 mb-12 text-center">Our Products</h3>

                        <div className="relative w-full">
                            <div className="flex animate-scroll pause-on-hover space-x-8 w-max px-4">
                                {/* Duplicate array to create seamless loop */}
                                {[...allProducts, ...allProducts].map((item, idx) => (
                                    <div key={`${item.id}-${idx}`} className="w-80 flex-shrink-0 bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                        <div className="h-56 overflow-hidden relative bg-gray-50">
                                            <div className="absolute top-3 right-3 z-10">
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${item.type === 'Scooter' ? 'bg-green-500' : 'bg-blue-500'}`}>
                                                    {item.type}
                                                </span>
                                            </div>
                                            <img
                                                src={item.image}
                                                alt={item.model || item.name}
                                                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                                            />

                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-xl font-bold text-gray-800 mb-2 truncate">{item.model || item.name}</h4>
                                            <p className="text-gray-600 text-sm mb-4 h-5 truncate">{item.type === 'Battery' ? item.capacity : item.motor}</p>
                                            <button
                                                onClick={() => setSelectedProduct(item)}
                                                className="inline-flex items-center text-green-600 font-bold text-sm hover:text-green-700 transition-colors group/link cursor-pointer"
                                            >
                                                Read more
                                                <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Battery Products Showcase Section - Light Theme */}





                    {/* Core Pillars - Modern Grid */}
                    {/* <div className="mb-24">
                        <h3 className="text-3xl font-bold text-teal-900 mb-12 text-center">Our Core Pillars</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-green-100 hover:shadow-2xl hover:shadow-green-200 transition-all duration-500">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <Zap className="text-white" size={32} />
                                </div>
                                <h4 className="text-2xl font-bold text-green-800 mb-4">Electric Mobility (EV)</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Promoting eco-friendly transportation with high-quality e-bikes and a 3-year continuous service promise.
                                </p>
                                <a href="/coming-soon" className="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition-colors">
                                    Explore EV Network <ChevronRight size={20} className="ml-1" />
                                </a>
                            </div>

                            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-2xl hover:shadow-orange-200 transition-all duration-500">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <Layers className="text-white" size={32} />
                                </div>
                                <h4 className="text-2xl font-bold text-orange-800 mb-4">Future Mobility</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Expanding into smart mobility rentals, shared platforms, and rural transportation solutions across Bihar.
                                </p>
                                <span className="inline-flex items-center text-orange-600 font-bold">
                                    Coming Soon
                                </span>
                            </div>
                        </div>
                    </div> */}

                    {/* Company Image Gallery - Carousel */}
                    {/* <div className="mb-24 px-4">
                        <h3 className="text-3xl font-bold text-teal-900 mb-12 text-center">Our Company in Action</h3>
                        <div className="relative max-w-4xl mx-auto group">
                            <div className="overflow-hidden rounded-3xl shadow-2xl relative h-[250px] md:h-[350px] lg:h-[450px]">
                                <img
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center p-8">
                                    <h4 className="text-white text-2xl font-bold drop-shadow-lg transform translate-y-0 transition-transform duration-300">
                                        {images[currentImageIndex].alt}
                                    </h4>
                                </div>
                            </div>

                          
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 z-10 hover:scale-110 group-hover:bg-white"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={32} />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 z-10 hover:scale-110 group-hover:bg-white"
                                aria-label="Next image"
                            >
                                <ChevronRight size={32} />
                            </button>

                          
                            <div className="flex justify-center mt-6 space-x-2">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-teal-600 w-8' : 'bg-gray-300 hover:bg-teal-400'
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div> */}


                    {/* Our Company in Action */}
                    <section className="py-20 bg-white relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <div className="inline-block mb-4">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                        Our Company in Action
                                    </h2>
                                    <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                                </div>
                                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                    Take a look at our latest updates, manufacturing excellence, and presence across India.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    'DNU8bJJJ8ko',
                                    'DL6tPoqCsq3',
                                    'DSKSKhUDuxs'
                                ].map((id, index) => (
                                    <div key={index} className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 h-[600px] relative group">
                                        <iframe
                                            src={`https://www.instagram.com/reel/${id}/embed`}
                                            className="w-full h-full border-none no-scrollbar"
                                            allowFullScreen
                                            scrolling="no"
                                            title={`Instagram Reel ${index + 1}`}
                                        ></iframe>
                                        <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 rounded-3xl"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    {/* <div className="text-center mt-16">
                        <button className="px-12 py-4 bg-gradient-to-r from-teal-600 to-green-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-300 transition-all duration-300 transform hover:-translate-y-1">
                            Connect With Us
                        </button>
                    </div> */}
                </div>

                <style jsx>{`
                    @keyframes floatUpDown {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        25% { transform: translateY(-15px) rotate(3deg); }
                        50% { transform: translateY(-8px) rotate(-2deg); }
                        75% { transform: translateY(-20px) rotate(2deg); }
                    }
                    @keyframes moveAcross {
                        0% { transform: translateX(-150px); opacity: 0; }
                        15% { opacity: 1; }
                        85% { opacity: 1; }
                        100% { transform: translateX(calc(100vw + 150px)); opacity: 0; }
                    }
                    @keyframes rotateFloat {
                        0% { transform: rotate(0deg) translateY(0px); }
                        50% { transform: rotate(180deg) translateY(-10px); }
                        100% { transform: rotate(360deg) translateY(0px); }
                    }
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.2; transform: scale(0.8); }
                        50% { opacity: 0.8; transform: scale(1.2); }
                    }
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                    .pause-on-hover:hover {
                        animation-play-state: paused;
                    }
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </div>

            {/* Testimonials */}
            <section id='success-stories' className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-lg animate-bounce delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                What Our Partners Say
                            </h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            WS Mobility has empowered hundreds of entrepreneurs across India to build successful EV businesses.
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



            {/* Contact Section - Redesigned */}
            <div id="contactSection" className="w-full bg-gradient-to-br from-green-50 to-emerald-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-left mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-teal-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl">Have a partnership proposal or product inquiry? Send us a message and our team will reach out.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column: Contact Form */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-green-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="sr-only" htmlFor="name">Full name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Full name"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="company">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            placeholder="Company"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Phone"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 hover:bg-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">How can we help?</label>
                                    <textarea
                                        id="message"
                                        rows="6"
                                        placeholder="How can we help?"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-gray-50 hover:bg-white resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="px-8 py-3 bg-white border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-sm"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Reach Us Info */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-green-100 flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-teal-900 mb-6">Reach us</h3>
                                <div className="space-y-4">
                                    <p className="flex items-center text-gray-600">
                                        <span className="font-semibold w-24 text-teal-800">Phone:</span>
                                        +91 9117031733
                                    </p>
                                    <p className="flex items-center text-gray-600">
                                        <span className="font-semibold w-24 text-teal-800">Email:</span>
                                        sales@wsmobility.in
                                    </p>
                                    <p className="flex items-start text-gray-600">
                                        <span className="font-semibold w-24 text-teal-800 flex-shrink-0">Location:</span>
                                        <span>Mitu Palace-202, Near PNB bank, Chitragupta Nagar, Kanti Factory Rd, Kankarbagh, Patna, Bihar-800026</span>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto relative rounded-2xl overflow-hidden h-64 sm:h-72 w-full group">
                                <img
                                    src={reachus}
                                    alt="WS Mobility Delivery Vehicle"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end p-6">
                                    <p className="text-white font-medium italic text-sm sm:text-base">
                                        Navigate Your Business by Logistics through Innovation, Dedication & Technology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Modal */}
            {
                selectedProduct && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <div
                            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-grow overflow-hidden flex flex-col md:flex-row">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-[60] shadow-lg backdrop-blur-md"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left Side - Image */}
                                <div className="w-full md:w-5/12 bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.model || selectedProduct.name}
                                        className="w-full h-auto max-h-[300px] md:max-h-full object-contain rounded-lg drop-shadow-2xl z-10 hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-lg ${selectedProduct.type === 'Battery' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
                                            {selectedProduct.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side - Specifications */}
                                <div
                                    className="w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar bg-white"
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "#10b981 #f3f4f6"
                                    }}
                                >
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.model || selectedProduct.name}</h2>
                                    <div className="w-20 h-1.5 bg-green-500 rounded-full mb-6"></div>

                                    {selectedProduct.type === 'Battery' ? (
                                        /* Battery Specs */
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-5 rounded-xl grid grid-cols-2 gap-4 border border-gray-100 shadow-sm">
                                                <div>
                                                    <span className="text-xs text-gray-500 block mb-1 font-bold uppercase tracking-wider">Voltage</span>
                                                    <p className="font-bold text-gray-900 text-2xl">{selectedProduct.voltage}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-gray-500 block mb-1 font-bold uppercase tracking-wider">Capacity</span>
                                                    <p className="font-bold text-gray-900 text-2xl">{selectedProduct.capacity}</p>
                                                </div>
                                            </div>

                                            <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 shadow-sm space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <span className="text-xs text-green-700 block font-bold uppercase tracking-wider">Energy</span>
                                                        <span className="font-bold text-gray-900 text-lg">{selectedProduct.energy}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-xs text-green-700 block font-bold uppercase tracking-wider">Chemistry</span>
                                                        <span className="font-bold text-gray-900 text-sm">{selectedProduct.chemistry}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                                                <span className="text-xs text-blue-700 block mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <Zap size={14} className="text-blue-600" /> Key Features
                                                </span>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {selectedProduct.features.map((feature, index) => (
                                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        /* Scooter Specs */
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-5 rounded-xl grid grid-cols-2 gap-4 border border-gray-100 shadow-sm">
                                                <div>
                                                    <span className="text-xs text-gray-500 block mb-1 font-bold uppercase tracking-wider">Motor</span>
                                                    <p className="font-bold text-gray-900 text-lg sm:text-lg">{selectedProduct.motor}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-gray-500 block mb-1 font-bold uppercase tracking-wider">Speed</span>
                                                    <p className="font-bold text-gray-900 text-2xl">{selectedProduct.speed}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                                                    <span className="text-xs text-green-700 block font-bold uppercase tracking-wider mb-1">Controller</span>
                                                    <p className="font-semibold text-gray-900">{selectedProduct.controller}</p>
                                                </div>
                                                <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                                                    <span className="text-xs text-green-700 block font-bold uppercase tracking-wider mb-1">Brake</span>
                                                    <p className="font-semibold text-gray-900">{selectedProduct.brake}</p>
                                                </div>
                                                <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                                                    <span className="text-xs text-green-700 block font-bold uppercase tracking-wider mb-1">Wheels</span>
                                                    <p className="font-semibold text-gray-900">{selectedProduct.wheels}</p>
                                                </div>
                                                <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                                                    <span className="text-xs text-green-700 block font-bold uppercase tracking-wider mb-1">Weight Limit</span>
                                                    <p className="font-semibold text-gray-900">{selectedProduct.limitedWeight}</p>
                                                </div>
                                            </div>

                                            <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                                                <span className="text-xs text-emerald-700 block mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <Bike size={14} className="text-emerald-600" /> Key Features
                                                </span>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {selectedProduct.features.map((feature, index) => (
                                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {/* Contact Section for Both */}
                                    <div className="bg-gray-900 text-white p-6 rounded-2xl mt-8 shadow-xl border border-gray-800">
                                        <h4 className="font-bold mb-4 flex items-center gap-2 text-green-400">
                                            <Info size={18} /> Contact For Booking
                                        </h4>
                                        <div className="space-y-3">
                                            <a
                                                href="tel:9122564288"
                                                className="flex justify-between items-center bg-gray-800 hover:bg-green-600 px-4 py-3 rounded-xl border border-gray-700 transition-all duration-300 group"
                                            >
                                                <span className="text-gray-400 group-hover:text-white">Call Now</span>
                                                <span className="text-white font-bold text-xl">9122564288</span>
                                            </a>
                                            <div className="grid grid-cols-2 gap-3">
                                                <a
                                                    href="mailto:info@wsmobility.in"
                                                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl border border-gray-700 text-center transition-colors text-sm"
                                                >
                                                    Email Us
                                                </a>
                                                <a
                                                    href="https://www.wsmobility.in"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl border border-gray-700 text-center transition-colors text-sm"
                                                >
                                                    Visit Website
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </section>
    );
};

export default ParentHero;

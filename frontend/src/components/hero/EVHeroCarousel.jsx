// src/components/EVHeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Zap, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
// Note: Remove the CSS import since we are using Tailwind classes directly.

const evSlides = [
  {
    id: 1,
    image: 'https://readdy.ai/api/search-image?query=sleek%20modern%20ev%20car%20in%20futuristic%20garage%2C%20dynamic%20lighting%2C%20futuristic%20design%2C%20high%20tech%20background%2C%20digital%20interface%2C%20clean%20and%20minimalist%20style&width=1200&height=600&seq=ev-hero-car-1&orientation=landscape',
    title: 'Next-Gen EV Dealership',
    subtitle: 'Driving a greener future, one vehicle at a time.',
    icon: <Car className="h-10 w-10 text-green-400" />,
    description: 'Discover our exclusive range of cutting-edge electric cars and bikes. We offer the latest in sustainable mobility.',
    link: '/ev-dealership',
  },
  {
    id: 2,
    image: 'https://readdy.ai/api/search-image?query=professional%20automotive%20technician%20performing%20car%20service%20in%20a%20clean%20modern%20garage%2C%20tools%20on%20wall%2C%20bright%20lighting%2C%20focus%20on%20high-quality%20service%20and%20precision&width=1200&height=600&seq=ev-hero-service-1&orientation=landscape',
    title: 'Premium Automotive Service',
    subtitle: 'Expert care for your vehicle, unmatched performance.',
    icon: <Wrench className="h-10 w-10 text-blue-400" />,
    description: 'From routine maintenance to complex repairs, our certified technicians provide top-tier service for all car brands.',
    link: '/car-service',
  },
  {
    id: 3,
    image: 'https://readdy.ai/api/search-image?query=charging%20station%20for%20electric%20vehicles%2C%20glowing%20lights%2C%20futuristic%20design%2C%20night%20scene%20%2Curban%20setting%2C%20powering%20up%2C%20energy%20and%20innovation%20concept&width=1200&height=600&seq=ev-hero-charging-1&orientation=landscape',
    title: 'Integrated Charging Solutions',
    subtitle: 'Powering your journey with advanced infrastructure.',
    icon: <Zap className="h-10 w-10 text-purple-400" />,
    description: 'We provide installation and maintenance of high-speed EV charging stations for both residential and commercial clients.',
    link: '/charging-solutions',
  },
];

const EVHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % evSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="relative h-screen overflow-hidden bg-black/20 text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${evSlides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center text-center md:text-left">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
              <motion.div
                key={`meta-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 flex items-center justify-center space-x-3 md:justify-start"
              >
                <div className="rounded-full bg-white/10 p-3">{evSlides[currentSlide].icon}</div>
                <span className="text-gray-300 font-semibold text-base sm:text-lg">
                  {evSlides[currentSlide].title}
                </span>
              </motion.div>

              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 text-wrap text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md"
              >
                {evSlides[currentSlide].subtitle}
              </motion.h1>

              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 text-gray-300 w-full text-center mx-auto md:mx-0"
              >
                {evSlides[currentSlide].description}
              </motion.p>

              <motion.div
                    className='w-full flex items-center justify-center md:justify-start'
                key={`cta-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href={evSlides[currentSlide].link}
                  className="inline-flex self-center items-center rounded-full border border-green-500 px-6 py-3 font-semibold text-green-400 transition duration-300 hover:bg-green-500 hover:text-white"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {evSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-green-400 scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + evSlides.length) % evSlides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % evSlides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </section>
  );
};

export default EVHeroCarousel;
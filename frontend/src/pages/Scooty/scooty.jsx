import React, { useState } from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { ArrowRight, Zap, Gauge, Battery, Settings, Info, Shield, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

const Scooty = () => {
  const navigate = useNavigate();
  const [selectedScooter, setSelectedScooter] = useState(null);

  const scooters = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTopButton />
      <ParentNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b-4 border-green-600 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Electric Scooters
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our premium range of electric scooters designed for modern urban mobility
            </p>
          </div>
        </div>
      </div>

      {/* Scooter Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {scooters.map((scooter) => (
            <motion.div
              layout
              key={scooter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer flex flex-col"
              onClick={() => setSelectedScooter(scooter)}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={scooter.image}
                  alt={scooter.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-110"
                />

                {/* Product Name Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-800 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-md">
                    {scooter.name}
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-start gap-3 bg-gray-50 p-2 rounded">
                    <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 block">Motor</span>
                      <p className="font-semibold text-gray-900 text-xs leading-tight">{scooter.motor}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-2 rounded">
                    <Battery className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 block">Controller</span>
                      <p className="font-semibold text-gray-900 text-sm">{scooter.controller}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-50 p-2 rounded">
                    <Gauge className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-gray-500 block">Speed</span>
                      <p className="font-semibold text-gray-900 text-sm">{scooter.speed}</p>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedScooter(scooter);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold text-sm mt-auto"
                >
                  View Full Specs
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedScooter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedScooter(null)}
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
                  onClick={() => setSelectedScooter(null)}
                  className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-20 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="grid md:grid-cols-2 gap-0 flex-grow overflow-hidden text-sm">
                  {/* Left Side - Image (Fixed) */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center h-[300px] md:h-full flex-shrink-0">
                    <img
                      src={selectedScooter.image}
                      alt={selectedScooter.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>


                  {/* Right Side - Specifications (Scrollable) */}
                  <div className="p-8 overflow-y-auto custom-scrollbar flex-grow bg-white" style={{ scrollbarWidth: 'thin', scrollbarColor: '#166534 #f3f4f6' }}>
                    <div className="bg-blue-800 text-white px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block shadow-md">
                      {selectedScooter.name}
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-400 block mb-1 font-bold">MOTOR</span>
                          <p className="font-semibold text-gray-900 text-xs">{selectedScooter.motor}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-400 block mb-1 font-bold">CONTROLLER</span>
                          <p className="font-semibold text-gray-900">{selectedScooter.controller}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-400 block mb-1 font-bold">SPEED</span>
                          <p className="font-semibold text-gray-900">{selectedScooter.speed}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-400 block mb-1 font-bold">WHEELS</span>
                          <p className="font-semibold text-gray-900">{selectedScooter.wheels}</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1 font-bold">BREAK</span>
                        <p className="font-semibold text-gray-900">{selectedScooter.brake}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-400 block mb-1 font-bold">DIMENSION</span>
                          <p className="font-semibold text-gray-900">{selectedScooter.dimension}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-400 block mb-1 font-bold">LOAD WEIGHT</span>
                          <p className="font-semibold text-gray-900">{selectedScooter.limitedWeight}</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1 font-bold">CHASSIS</span>
                        <p className="font-semibold text-gray-900">{selectedScooter.chassis}</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1 font-bold">LIGHT & DISPLAY</span>
                        <p className="font-semibold text-gray-900">{selectedScooter.lightDisplay}</p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-xl border border-green-200 shadow-sm">
                        <span className="text-xs text-green-700 block mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                          <Shield size={14} /> Premium Features
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedScooter.features.map((feature, idx) => (
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

      <ParentFooter />
    </div>
  );
};

export default Scooty;

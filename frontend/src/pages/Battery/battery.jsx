import React, { useState } from "react";
import ParentNav from "../../components/navbar/parentNav";
import ParentFooter from "../../components/footer/parentFooter";
import ScrollToTopButton from "../../utils/ScrollToTopButton";
import { Battery, ArrowRight, Shield, Zap, Info, Thermometer, Weight, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import battery1 from "../../assets/battery1.jpeg";
import battery2 from "../../assets/battery2.jpeg";
import { AnimatePresence, motion } from "motion/react";

const BatteryPage = () => {
  const navigate = useNavigate();
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [activeCategory, setActiveCategory] = useState("battery"); // "battery" (all), "2wheel", "3wheeler"

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
      image: battery2,
      category: "2wheel",
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
      image: battery2,
      category: "2wheel",
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
      image: battery2,
      category: "2wheel",
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
      image: battery1,
      category: "3wheeler",
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
      contact: { website: "www.wsmobility.in", email: "info@wsmobility.in", phone: "9122564288" }
    }
  ];

  const filteredBatteries = activeCategory === "battery"
    ? batteries
    : batteries.filter(b => b.category === activeCategory);

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
                <Battery size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Batteries & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Premium lithium batteries for your electric vehicles and industrial needs
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveCategory("battery")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-md ${activeCategory === "battery"
              ? "bg-green-600 text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
          >
            Battery
          </button>
          <button
            onClick={() => setActiveCategory("2wheel")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-md ${activeCategory === "2wheel"
              ? "bg-green-600 text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
          >
            2 Wheeler
          </button>
          <button
            onClick={() => setActiveCategory("3wheeler")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-md ${activeCategory === "3wheeler"
              ? "bg-green-600 text-white transform scale-105"
              : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
          >
            3 Wheeler
          </button>
        </div>
      </div>

      {/* Battery Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-green-600">Lithium Batteries</h2>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredBatteries.map((battery) => (
              <motion.div
                layout
                key={battery.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer flex flex-col"
                onClick={() => setSelectedBattery(battery)}
              >
                {/* Battery Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img
                    src={battery.image}
                    alt={battery.model}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-800 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md">
                      {battery.voltage} {battery.capacity}
                    </div>
                  </div>
                </div>

                {/* Battery Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{battery.model}</h3>
                  <p className="text-green-600 font-medium text-sm mb-4">{battery.chemistry}</p>

                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Zap size={14} className="text-yellow-500" /> Energy
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">{battery.energy}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Activity size={14} className="text-green-500" /> Cycle Life
                      </span>
                      <span className="font-semibold text-gray-900 text-sm">{battery.cycleLife}</span>
                    </div>
                    {battery.weight && (
                      <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span className="text-sm text-gray-500 flex items-center gap-2">
                          <Weight size={14} className="text-blue-500" /> Weight
                        </span>
                        <span className="font-semibold text-gray-900 text-sm">{battery.weight}</span>
                      </div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBattery(battery);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold text-sm mt-auto"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            {[
              "Above Prices include of GST and Taxes @ 18% for Battery and 5% for the chargers.",
              "Prices do not include freight charges. The Freight is to be borne by the customer.",
              "Above prices are subjects to change without any prior notice.",
              "Warranty applicable is subject to company's warranty norms.",
              "Above prices are applicable with available stock.",
              "All disputes are subject to Patna courts only.",
              "Chargers come with 1 year (12 Months) warranty.",
              "Prices are valid for 15 days only."
            ].map((term, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm">{term}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedBattery && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBattery(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-grow overflow-hidden flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setSelectedBattery(null)}
                className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-20 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2 gap-0 flex-grow overflow-hidden">
                {/* Left Side - Image (Fixed) */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center h-[300px] md:h-full flex-shrink-0">
                  <img
                    src={selectedBattery.image}
                    alt={selectedBattery.model}
                    className="w-full h-full object-contain rounded-lg drop-shadow-xl"
                  />
                </div>

                {/* Right Side - Specifications (Scrollable) */}
                <div
                  className="p-8 overflow-y-auto custom-scrollbar flex-grow bg-white"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#166534 #f3f4f6"
                  }}
                >
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-6 inline-block shadow-md">
                    {selectedBattery.model}
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-5 rounded-xl grid grid-cols-2 gap-4 border border-gray-100 shadow-sm">
                      <div>
                        <span className="text-xs text-gray-400 block mb-1 font-bold uppercase tracking-wider">Voltage</span>
                        <p className="font-bold text-gray-900 text-2xl">{selectedBattery.voltage}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block mb-1 font-bold uppercase tracking-wider">Capacity</span>
                        <p className="font-bold text-gray-900 text-2xl">{selectedBattery.capacity}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-xl border border-green-100 shadow-sm space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs text-green-600 block font-bold uppercase tracking-wider">Energy</span>
                          <span className="font-bold text-gray-900 text-lg">{selectedBattery.energy}</span>
                        </div>
                        <div>
                          <span className="text-xs text-green-600 block font-bold uppercase tracking-wider">Chemistry</span>
                          <span className="font-bold text-gray-900 text-sm leading-tight inline-block">{selectedBattery.chemistry}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-100">
                        <div>
                          <span className="text-xs text-green-600 block font-bold uppercase tracking-wider">Cell Type</span>
                          <span className="font-bold text-gray-900 text-sm">{selectedBattery.cellType}</span>
                        </div>
                        <div>
                          <span className="text-xs text-green-600 block font-bold uppercase tracking-wider">Cycle Life</span>
                          <span className="font-bold text-gray-900 text-lg">{selectedBattery.cycleLife}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                      <span className="text-xs text-blue-600 block mb-3 font-bold uppercase tracking-wider flex items-center gap-2">
                        <Zap size={14} className="text-blue-600" /> Key Features
                      </span>
                      <ul className="grid grid-cols-1 gap-2">
                        {selectedBattery.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm text-gray-700 bg-white/50 p-2 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gray-900 text-white p-6 rounded-2xl mt-8 shadow-2xl border border-gray-800">
                      <h4 className="font-bold mb-4 flex items-center gap-2 text-green-400">
                        <Info size={18} /> Contact For Booking
                      </h4>
                      <div className="space-y-3">
                        <a
                          href={`tel:${selectedBattery.contact.phone}`}
                          className="flex justify-between items-center bg-gray-800 hover:bg-green-600 px-4 py-3 rounded-xl border border-gray-700 transition-all duration-300 group"
                        >
                          <span className="text-gray-400 group-hover:text-white">Call Now</span>
                          <span className="text-white font-bold text-xl">{selectedBattery.contact.phone}</span>
                        </a>
                        <div className="grid grid-cols-2 gap-3">
                          <a
                            href={`mailto:${selectedBattery.contact.email}`}
                            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-xl border border-gray-700 text-center transition-colors text-sm"
                          >
                            Email Us
                          </a>
                          <a
                            href={`https://${selectedBattery.contact.website}`}
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
          </div>
        </div>
      )}

      <ParentFooter />
    </div>
  );
};

export default BatteryPage;

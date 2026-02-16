import React, { useState } from 'react';
import ParentNav from '../../components/navbar/parentNav';
import ParentFooter from '../../components/footer/parentFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Play, Maximize2, X, Filter } from 'lucide-react';



const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = ['All', 'Manufacturing', 'Models', 'Events', 'Logistics'];

    const galleryItems = [
        {
            id: 1,
            type: 'image',
            category: 'Manufacturing',
            title: 'Precision Manufacturing',
            description: 'Our advanced manufacturing facility ensures Every part is crafted with excellence.',
            url: 'assets/gallery/1.jpeg',
        },
        {
            id: 2,
            type: 'image',
            category: 'Logistics',
            title: 'Delivery in Action',
            description: 'Our delivery vehicles ensuring prompt service across various regions.',
            url: 'assets/gallery/2.jpeg',
        },
        {
            id: 3,
            type: 'image',
            category: 'Events',
            title: 'Team Workshop',
            description: 'Collaborative sessions to drive innovation in electric mobility.',
            url: 'assets/gallery/3.jpeg',
        },
        {
            id: 4,
            type: 'image',
            category: 'Manufacturing',
            title: 'Production Line',
            description: 'Rigorous quality checks at every stage of the production process.',
            url: 'assets/gallery/4.jpeg',
        },
        {
            id: 5,
            type: 'image',
            category: 'Logistics',
            title: 'Resource Management',
            description: 'Efficient handling of assets to maintain smooth operations.',
            url: 'assets/gallery/5.jpeg',
        },
        {
            id: 6,
            type: 'image',
            category: 'Models',
            title: 'WS GTR Series',
            description: 'Our flagship premium electric scooter with industry-leading range.',
            url: 'assets/gallery/6.jpeg',
        },
        {
            id: 7,
            type: 'image',
            category: 'Models',
            title: 'Swift Edition',
            description: 'Designed for urban agility and performance.',
            url: 'assets/gallery/7.jpeg',
        },
        {
            id: 8,
            type: 'image',
            category: 'Manufacturing',
            title: 'Battery Assembly',
            description: 'In-house battery assembly ensuring maximum safety and capacity.',
            url: 'assets/gallery/8.jpeg',
        },
        {
            id: 9,
            type: 'image',
            category: 'Manufacturing',
            title: 'Next-Gen Power Cells',
            description: 'Developing high-performance lithium-ion solutions.',
            url: 'assets/gallery/manufacturing.png',
        },
        {
            id: 10,
            type: 'image',
            category: 'Models',
            title: 'Visto Plus',
            description: 'Balanced power and efficiency for everyday commuters.',
            url: 'https://lh3.googleusercontent.com/p/AF1QipMRRGv01P1QTNs7xLUmY2kbIqcmMN_ry36W_4Ft=s1360-w1360-h1020-rw',
        },
        {
            id: 11,
            type: 'image',
            category: 'Events',
            title: 'Strategic Planning',
            description: 'Planning the future milestones for WS Mobility.',
            url: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqCOq2-4OtkCsVG0v1akc2ka-ZrRZ4EQC_jmFuuPmicdhxrUmCe7xfJyYIPlOLVnRlEsol8H3SI9xxzIBcgMKE7ih9RqkCwEDwML--qxU3E2uZXO8bBMwR-srTqcuksVgKnEbNVXuVmLJVc=s1360-w1360-h1020-rw',
        }
    ];

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            <ParentNav />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[100px] -ml-20 -mb-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        Our Company <span className="text-green-400">In Action</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Witness the excellence in manufacturing, logistics, and innovation that drives WS Mobility forward.
                    </motion.p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm md:text-base flex items-center gap-2 ${selectedCategory === cat
                                    ? 'bg-green-600 text-white shadow-lg shadow-green-200 scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat === 'All' && <Filter size={16} />}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative bg-gray-100">
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <span className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                                    <Maximize2 size={14} /> View Full
                                                </div>
                                            </div>
                                        </div>
                                        {item.type === 'video' && (
                                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                                <Play size={20} fill="currentColor" />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-xl font-medium">No items found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedItem(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="max-w-6xl w-full flex flex-col items-center gap-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                                <img
                                    src={selectedItem.url}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center max-w-3xl">
                                <span className="text-green-400 font-bold uppercase tracking-widest text-sm mb-3 block italic">
                                    {selectedItem.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic uppercase tracking-tight">
                                    {selectedItem.title}
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {selectedItem.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ParentFooter />
        </div>
    );
};

export default Gallery;

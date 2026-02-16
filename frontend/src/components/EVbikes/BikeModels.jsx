import React, { useState, useMemo, useCallback } from 'react';
import { Search, Filter, X, ChevronDown, SortAsc, SortDesc, Star, Zap, Gauge, Battery, ArrowRight, Shield, Activity, Settings, Info, Box, Maximize, Weight, Lightbulb, Map } from 'lucide-react';
import { AnimatePresence, motion } from "motion/react";

const BikeModels = ({ bikes: initialBikes = [] }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showFilters, setShowFilters] = useState(false);
    const [featuredOnly, setFeaturedOnly] = useState(false);
    const [availableOnly, setAvailableOnly] = useState(false);
    const [speedRange, setSpeedRange] = useState([0, 200]);
    const [rangeFilter, setRangeFilter] = useState([0, 300]);
    const [batteryType, setBatteryType] = useState('all');
    const [motorType, setMotorType] = useState('all');
    const [chargingType, setChargingType] = useState('all');
    const [selectedBike, setSelectedBike] = useState(null);

    // calculations filtering ke liye
    const { categories, filterOptions } = useMemo(() => {
        const cats = [...new Set(initialBikes.map(bike => bike.category))].filter(Boolean).sort();

        const batteryTypes = [...new Set(initialBikes.map(bike =>
            bike.specifications?.batteryType || bike.specifications?.battery
        ).filter(Boolean))].sort();

        const motorTypes = [...new Set(initialBikes.map(bike =>
            bike.specifications?.motorType || bike.specifications?.motor
        ).filter(Boolean))].sort();

        const chargingTypes = [...new Set(initialBikes.map(bike =>
            bike.specifications?.chargingType || bike.specifications?.charging
        ).filter(Boolean))].sort();

        const speeds = initialBikes.map(bike =>
            parseInt(bike.specifications?.speed?.toString().replace(/\D/g, '') || '0')
        ).filter(speed => speed > 0);

        const ranges = initialBikes.map(bike =>
            parseInt(bike.specifications?.range?.toString().replace(/\D/g, '') || '0')
        ).filter(range => range > 0);

        return {
            categories: cats,
            filterOptions: {
                batteryTypes,
                motorTypes,
                chargingTypes,
                speedBounds: speeds.length > 0 ?
                    { min: Math.min(...speeds), max: Math.max(...speeds) } :
                    { min: 0, max: 200 },
                rangeBounds: ranges.length > 0 ?
                    { min: Math.min(...ranges), max: Math.max(...ranges) } :
                    { min: 0, max: 300 }
            }
        };
    }, [initialBikes]);

    // Utility functions
    const getSpecIcon = useCallback((key) => {
        const iconMap = {
            motor: Zap,
            range: Battery,
            speed: Gauge,
            battery: Battery,
            wheels: Box,
            brakeSystem: Shield,
            dimension: Maximize,
            limitedWeight: Weight,
            chassis: Settings,
            lightDisplay: Lightbulb,
            controller: Activity
        };
        return iconMap[key] || Zap;
    }, []);

    const searchBikes = useCallback((bikes, query) => {
        if (!query?.trim()) return bikes;
        const searchTerm = query.toLowerCase().trim();

        return bikes.filter(bike => {
            const searchableFields = [
                bike.name, bike.category, bike.specifications?.motor,
                bike.specifications?.range, bike.specifications?.speed,
                bike.specifications?.battery, ...(bike.features || [])
            ].filter(Boolean).map(field => field.toString().toLowerCase());

            return searchableFields.some(field => field.includes(searchTerm));
        });
    }, []);

    // filtering and sorting 
    const filteredAndSortedBikes = useMemo(() => {
        let filtered = searchBikes(initialBikes, searchQuery);

        // Apply filters
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(bike => bike.category === selectedCategory);
        }

        filtered = filtered.filter(bike => {
            const speed = parseInt(bike.specifications?.speed?.toString().replace(/\D/g, '') || '0');
            const range = parseInt(bike.specifications?.range?.toString().replace(/\D/g, '') || '0');
            return speed >= speedRange[0] && speed <= speedRange[1] &&
                range >= rangeFilter[0] && range <= rangeFilter[1];
        });

        if (batteryType !== 'all') {
            filtered = filtered.filter(bike =>
                bike.specifications?.batteryType === batteryType ||
                bike.specifications?.battery === batteryType
            );
        }

        if (motorType !== 'all') {
            filtered = filtered.filter(bike =>
                bike.specifications?.motorType === motorType ||
                bike.specifications?.motor === motorType
            );
        }

        if (chargingType !== 'all') {
            filtered = filtered.filter(bike =>
                bike.specifications?.chargingType === chargingType ||
                bike.specifications?.charging === chargingType
            );
        }

        if (featuredOnly) filtered = filtered.filter(bike => bike.featured === true);
        if (availableOnly) filtered = filtered.filter(bike => bike.available === true);

        // sorting
        filtered.sort((a, b) => {
            let aValue, bValue;
            switch (sortBy) {
                case 'range':
                    aValue = parseInt(a.specifications?.range?.toString().replace(/\D/g, '') || '0');
                    bValue = parseInt(b.specifications?.range?.toString().replace(/\D/g, '') || '0');
                    break;
                case 'speed':
                    aValue = parseInt(a.specifications?.speed?.toString().replace(/\D/g, '') || '0');
                    bValue = parseInt(b.specifications?.speed?.toString().replace(/\D/g, '') || '0');
                    break;
                case 'category':
                    aValue = (a.category || '').toLowerCase();
                    bValue = (b.category || '').toLowerCase();
                    break;
                case 'name':
                default:
                    aValue = (a.name || '').toLowerCase();
                    bValue = (b.name || '').toLowerCase();
                    break;
            }
            return sortOrder === 'asc' ?
                (aValue > bValue ? 1 : aValue < bValue ? -1 : 0) :
                (aValue < bValue ? 1 : aValue > bValue ? -1 : 0);
        });

        return filtered;
    }, [initialBikes, searchQuery, selectedCategory, speedRange, rangeFilter, batteryType, motorType, chargingType, sortBy, sortOrder, featuredOnly, availableOnly, searchBikes]);

    // Event handlers
    const resetFilters = useCallback(() => {
        setSearchQuery('');
        setSelectedCategory('all');
        setSpeedRange([filterOptions.speedBounds.min, filterOptions.speedBounds.max]);
        setRangeFilter([filterOptions.rangeBounds.min, filterOptions.rangeBounds.max]);
        setBatteryType('all');
        setMotorType('all');
        setChargingType('all');
        setSortBy('name');
        setSortOrder('asc');
        setFeaturedOnly(false);
        setAvailableOnly(false);
    }, [filterOptions]);

    const handleClearSearch = useCallback(() => setSearchQuery(''), []);

    const renderFilterSelect = (label, value, onChange, options, allLabel) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
            >
                <option value="all">{allLabel}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

    const renderRangeFilter = (label, range, setRange, bounds, step) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}: {range[0]} - {range[1]} {label.includes('Speed') ? 'km/h' : 'km'}
            </label>
            <div className="flex gap-2">
                {[0, 1].map(index => (
                    <input
                        key={index}
                        type="range"
                        min={bounds.min}
                        max={bounds.max}
                        step={step}
                        value={range[index]}
                        onChange={(e) => {
                            const newRange = [...range];
                            newRange[index] = parseInt(e.target.value);
                            setRange(newRange);
                        }}
                        className="flex-1 accent-green-600"
                    />
                ))}
            </div>
        </div>
    );

    const renderBikeCard = (bike, index) => (
        <motion.div
            layout
            key={bike._id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 flex flex-col h-full group"
            onClick={() => setSelectedBike(bike)}
        >
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                    src={bike.imageUrl || bike.image}
                    alt={bike.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
                        {bike.category}
                    </div>
                    {bike.featured && (
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                            <Star size={10} fill="currentColor" /> FEATURED
                        </div>
                    )}
                </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{bike.name}</h3>

                <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-green-50 rounded-lg">
                            <Zap size={18} className="text-green-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Motor</p>
                            <p className="font-bold text-sm truncate max-w-[150px]">{bike.specifications.motor}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <Gauge size={18} className="text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Speed</p>
                            <p className="font-bold text-sm">{bike.specifications.speed}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <Activity size={18} className="text-purple-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-semibold">Controller</p>
                            <p className="font-bold text-sm">{bike.specifications.controller}</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBike(bike);
                    }}
                    className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-bold flex items-center justify-center gap-2 group/btn mt-auto"
                >
                    View Full Specs
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );

    if (initialBikes.length === 0) {
        return (
            <section className="min-h-screen bg-gray-200 pt-0">
                <div className="max-w-7xl mx-auto px-4 py-16 pt-12">
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg">No bikes available to display.</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-gray-200 pt-0">
            <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 mb-12">
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search bikes by name, features, or specifications..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        />
                        {searchQuery && (
                            <button
                                onClick={handleClearSearch}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors"
                                aria-label="Clear search"
                            >
                                <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            <Filter className="h-4 w-4" />
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
                        </button>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <span className="text-sm text-gray-600">
                                {filteredAndSortedBikes.length} of {initialBikes.length} bikes
                            </span>
                            <button
                                onClick={resetFilters}
                                className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>


                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg transition-all duration-300">
                            {renderFilterSelect('Category', selectedCategory, setSelectedCategory, categories, 'All Categories')}
                            {renderFilterSelect('Sort By', sortBy, setSortBy, ['name', 'category', 'range', 'speed'], 'Name')}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                                <button
                                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                    className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                                >
                                    {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                                </button>
                            </div>

                            {renderRangeFilter('Speed Range', speedRange, setSpeedRange, filterOptions.speedBounds, 5)}
                            {renderRangeFilter('Range', rangeFilter, setRangeFilter, filterOptions.rangeBounds, 10)}
                            {renderFilterSelect('Battery Type', batteryType, setBatteryType, filterOptions.batteryTypes, 'All Battery Types')}
                            {renderFilterSelect('Motor Type', motorType, setMotorType, filterOptions.motorTypes, 'All Motor Types')}
                            {renderFilterSelect('Charging Type', chargingType, setChargingType, filterOptions.chargingTypes, 'All Charging Types')}

                            <div className="col-span-full">
                                <div className="flex flex-wrap gap-6">
                                    {[
                                        { state: featuredOnly, setState: setFeaturedOnly, label: 'Featured Only' },
                                        { state: availableOnly, setState: setAvailableOnly, label: 'Available Only' }
                                    ].map(({ state, setState, label }) => (
                                        <label key={label} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={state}
                                                onChange={(e) => setState(e.target.checked)}
                                                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 accent-green-600"
                                            />
                                            <span className="text-sm text-gray-700">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {filteredAndSortedBikes.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-500 text-lg mb-4">No bikes found matching your criteria.</div>
                        <button
                            onClick={resetFilters}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {filteredAndSortedBikes.map(renderBikeCard)}
                    </div>
                )}

                {/* Detailed Modal */}
                <AnimatePresence>
                    {selectedBike && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                            onClick={() => setSelectedBike(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative flex-grow overflow-hidden flex flex-col">
                                    {/* Close Button */}
                                    <button
                                        onClick={() => setSelectedBike(null)}
                                        className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-[60] shadow-lg"
                                    >
                                        <X size={24} />
                                    </button>

                                    {/* Modal Content */}
                                    <div className="grid md:grid-cols-2 gap-0 flex-grow overflow-hidden">
                                        {/* Left Side - Image */}
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center h-[300px] md:h-full flex-shrink-0">
                                            <img
                                                src={selectedBike.imageUrl || selectedBike.image}
                                                alt={selectedBike.name}
                                                className="w-full h-full object-contain drop-shadow-2xl"
                                            />
                                        </div>

                                        {/* Right Side - Specifications */}
                                        <div className="p-8 overflow-y-auto custom-scrollbar flex-grow bg-white" style={{ scrollbarWidth: 'thin', scrollbarColor: '#166534 #f3f4f6' }}>
                                            <div className="flex flex-col mb-6">
                                                <span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-1">{selectedBike.category}</span>
                                                <h2 className="text-3xl font-bold text-gray-900">{selectedBike.name}</h2>
                                                <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {Object.entries(selectedBike.specifications).map(([key, value]) => {
                                                        const IconComponent = getSpecIcon(key);
                                                        return (
                                                            <div key={key} className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-start gap-3">
                                                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                                                    <IconComponent size={16} className="text-green-600" />
                                                                </div>
                                                                <div>
                                                                    <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-tight">
                                                                        {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                                                    </span>
                                                                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">{value}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                                {/* Premium Features */}
                                                <div className="bg-green-50 p-5 rounded-2xl border border-green-100 shadow-sm mt-6">
                                                    <span className="text-xs text-green-700 block mb-4 font-bold uppercase tracking-wider flex items-center gap-2">
                                                        <Shield size={14} /> Premium Features
                                                    </span>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {selectedBike.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center gap-2 bg-white/60 p-2 rounded-lg border border-green-50">
                                                                <Activity size={12} className="text-green-600" />
                                                                <span className="text-xs font-medium text-gray-800">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Color Options */}
                                                {selectedBike.colors && (
                                                    <div className="mt-6">
                                                        <span className="text-xs text-gray-400 block mb-3 font-bold uppercase tracking-wider">Available Colors</span>
                                                        <div className="flex flex-wrap gap-2">
                                                            {selectedBike.colors.map(color => (
                                                                <span key={color} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200">
                                                                    {color}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Call to Action */}
                                                <div className="bg-gray-900 text-white p-6 rounded-2xl mt-8 shadow-xl">
                                                    <h4 className="font-bold mb-4 flex items-center gap-2 text-green-400 text-sm">
                                                        <Info size={16} /> Interested in this model?
                                                    </h4>
                                                    <div className="flex flex-col sm:flex-row gap-3">
                                                        <a href="tel:9117031733" className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 p-3 rounded-xl transition-colors font-bold text-sm">
                                                            Call Sales
                                                        </a>
                                                        <a href="/evdealershipcontact" className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-xl border border-gray-700 transition-colors font-bold text-sm">
                                                            Get Quote
                                                        </a>
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
        </section>
    );
};

export default BikeModels;
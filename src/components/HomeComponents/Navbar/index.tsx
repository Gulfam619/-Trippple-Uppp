import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, Home, ChevronDown, Search, Menu, X } from 'lucide-react';
import { IoMdLogIn } from "react-icons/io";
import Logo from "../../../assets/PNGs/logo.png";
import { Link } from 'react-router-dom';
import { categories } from '../../../constants';

const Navbar: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const profileMenuItems = [
        { icon: Home, label: "Dashboard", route: "/store" },
        { icon: Settings, label: "Settings", route: "/" },
        { icon: IoMdLogIn, label: "Login", route: "/signin" },
    ];

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleMenuItemClick = (route: string) => {
        console.log(`Navigating to: ${route}`);
        setIsProfileOpen(false);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="bg-dark-blue text-white shadow-lg sticky top-0 z-50 w-full">
                <div className="w-full md:w-[95%] px-2 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-lg cursor-pointer transition-colors duration-200"
                            >
                                <Menu size={24} />
                            </button>

                            <Link to="/">
                                <img src={Logo} alt="logo" className="w-56" />
                            </Link>
                        </div>

                        {/* Desktop - Search & Category */}
                        <div className="hidden md:flex items-center justify-end gap-4 w-full">
                            {/* Search Form */}
                            <form onSubmit={handleSearchSubmit}>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                        className="pl-10 pr-2 py-1.5  bg-transparent border border-gray-300 rounded-lg text-gray-100 placeholder-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-[350px]"
                                    />
                                    <Search
                                        size={20}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </form>

                            {/* Category Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center justify-between rounded-lg px-2 py-1.5 border hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <span className="text-white">{selectedCategory}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`ml-2 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg py-1 z-40"
                                        >
                                            {categories.map((category, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setSelectedCategory(category);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Right side - Profile */}
                        <div className="relative px-2">
                            <button
                                onClick={handleProfileClick}
                                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                            >
                                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
                                    <User size={20} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {isProfileOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-white/90 rounded-md shadow-lg py-1 z-50"
                                    >
                                        {profileMenuItems.map((item, index) => (
                                            <Link to={item.route} key={index}>
                                                <button
                                                    key={index}
                                                    onClick={() => handleMenuItemClick(item.route)}
                                                    className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-150"
                                                >
                                                    <item.icon size={16} className="mr-3" />
                                                    {item.label}
                                                </button>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={closeMobileMenu}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 left-0 h-full w-80 bg-dark-blue shadow-xl z-50 md:hidden"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <Link to="/" onClick={closeMobileMenu}>
                                    <img src={Logo} alt="logo" className="w-24" />
                                </Link>
                                <button
                                    onClick={closeMobileMenu}
                                    className="p-2 rounded-lg cursor-pointer transition-colors duration-200"
                                >
                                    <X size={24} className="text-gray-100" />
                                </button>
                            </div>

                            {/* Drawer Content */}
                            <div className="p-4 space-y-6">
                                {/* Search in drawer */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Search</h3>
                                    <form onSubmit={handleSearchSubmit}>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search products..."
                                                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            />
                                            <Search
                                                size={20}
                                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            />
                                        </div>
                                    </form>
                                </div>

                                {/* Categories in drawer */}
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.map((category, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setSelectedCategory(category);
                                                    closeMobileMenu();
                                                }}
                                                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer ${selectedCategory === category
                                                    ? 'bg-blue-100 text-blue-700 font-medium'
                                                    : 'text-white hover:text-gray-200'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
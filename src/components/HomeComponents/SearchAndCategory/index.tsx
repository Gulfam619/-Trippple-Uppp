
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { categories } from '../../../constants';


const SearchAndCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
        {/* Search Button */}
        <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200 min-w-[200px]">
          <Search size={20} className="text-gray-600" />
          <span className="text-gray-600">Search products...</span>
        </button>

        {/* Category Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-lg transition-colors duration-200 min-w-[180px]"
          >
            <span className="text-gray-700">{selectedCategory}</span>
            <ChevronDown
              size={16}
              className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                }`}
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
    </div>
  );
};

export default SearchAndCategory;
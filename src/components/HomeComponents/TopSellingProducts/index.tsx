import React from "react";
import { motion } from "framer-motion";
import { dummyProducts } from "../../../constants";
import CompHeading from "../../../global/CompHeading";

const TopSellingProducts: React.FC = () => {
    const handleInvestNow = (productName: string) => {
        console.log(`Investing in: ${productName}`);
        // Add your investment logic here
    };

    return (
        <section className="w-full md:w-[95%] px-2 mx-auto py-2">
            <CompHeading heading="Top 10 Selling Products" description="Discover our top-selling products!" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm bg-white p-4 hover:shadow-md transition-shadow duration-200 flex flex-col h-[450px]"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h2>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                        <div className="text-lg font-bold text-green-600 mb-2">${product.price}</div>
                        <div className="text-sm text-blue-600 mb-4">
                            <span className="font-medium">Total Sales: </span>
                            {product.sales.toLocaleString()}
                        </div>
                        <div className="mt-auto">
                            <button
                                onClick={() => handleInvestNow(product.name)}
                                className="w-full bg-yellow1 text-white py-2 px-4 rounded-md hover:bg-[#c8ad43] transition-colors duration-200 font-medium cursor-pointer"
                            >
                                Invest Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TopSellingProducts;

import React from "react";
import { dummyProducts } from "../../constants";

const Card: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-6">
            {dummyProducts?.map((product, index) => (
                <div
                    key={index}
                    className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm bg-white p-4"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="text-lg font-bold text-green-600 mb-2">${product.price}</div>
                    <div className="text-sm text-yellow-500">
                        {"★".repeat(Math.floor(product.rating))}
                        {"☆".repeat(5 - Math.floor(product.rating))}
                        <span className="ml-2 text-gray-500">({product.rating})</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

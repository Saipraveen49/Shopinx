import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const ProductItem = ({ id, name, image, price, oldPrice }) => {
    const { rupees, addToCart } = useContext(ShopContext);

    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition duration-300 relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white">
            {/* Product Image with Sale Badge */}
            <div className="relative group rounded-lg overflow-hidden">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
                    Sale
                </span>

                <img
                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 rounded-lg"
                    src={image[0]}
                    alt={name}
                />

                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                        className="w-8 h-8 bg-white p-1 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
                        src={assets.wishlist}
                        alt="Wishlist"
                    />
                    <img
                        className="w-8 h-8 bg-white p-1 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
                        src={assets.quickview}
                        alt="Quick View"
                    />
                </div>
            </div>

            <p className="text-gray-500 text-xs mt-3">Snack & Munchies</p>
            <Link
                className="block text-sm font-medium mt-1 hover:text-blue-600 truncate max-w-full"
                to={`/product/${id}`}
            >
                {name}
            </Link>

            <div className="flex items-center text-yellow-500 text-sm mt-2">
                ★★★★☆ <span className="text-gray-500 text-xs ml-1">4.5 (149)</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <p className="text-lg font-bold">{rupees}{price}</p>
                {oldPrice && (
                    <p className="text-gray-400 line-through text-sm">{rupees}{oldPrice}</p>
                )}
            </div>

            {/* Add to Cart Button */}
            <button 
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md mt-4 w-full hover:bg-green-600 transition"
                onClick={() => addToCart(id, name, price, image[0])}
            >
                + Add
            </button>
        </div>
    );
};

export default ProductItem;

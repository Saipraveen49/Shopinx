import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';

const PopularProducts = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Section Title */}
      <p className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
        Popular Products
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((item, index) => (
          <ProductItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            price={item.price} 
            image={item.images[0]} 
          />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;

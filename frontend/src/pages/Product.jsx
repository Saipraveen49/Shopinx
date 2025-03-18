import React from 'react';
import { useState } from 'react';
import { assets } from '../assets/assets';

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const product = {
    name: "Mens Cotton Shirt",
    price: 149.99,
    discount: 20, // percentage
    rating: 4.7,
    reviewCount: 128,
    stock: 12,
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.",
    features: [
      "Active noise cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls",
      "Foldable design for easy storage"
    ],
    images: [
      assets.p_img2_1,
      assets.p_img2_2,
      assets.p_img2_3,
      assets.p_img2_4,
    ],
    colors: ["Black", "White", "Blue"],
    specifications: {
      "Brand": "SoundWave",
      "Model": "Pro X30",
      "Weight": "285g",
      "Dimensions": "7.5 × 6.5 × 4.0 inches",
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz"
    },
    reviews: [
      { user: "John D.", rating: 5, date: "February 12, 2025", comment: "These are the best headphones I've ever owned! The sound quality is incredible and the battery lasts forever." },
      { user: "Sarah M.", rating: 4, date: "January 28, 2025", comment: "Very comfortable and great sound. The noise cancellation works really well on airplanes." },
      { user: "Michael T.", rating: 5, date: "January 15, 2025", comment: "Worth every penny. The build quality is excellent and they connect to my devices seamlessly." }
    ],
  };

  const discountedPrice = product.price - (product.price * (product.discount / 100));
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-lg ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2 flex items-center text-sm">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <span className="mx-1">›</span>
        <span className="hover:text-blue-600 cursor-pointer">Electronics</span>
        <span className="mx-1">›</span>
        <span className="hover:text-blue-600 cursor-pointer">Headphones</span>
        <span className="mx-1">›</span>
        <span className="text-gray-500">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-2/5">
            <div className="bg-white p-4 rounded-lg shadow-sm overflow-hidden mb-4">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-96 object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer bg-white p-2 rounded-md transition-all ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-20 object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-3/5">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-800">${discountedPrice.toFixed(2)}</span>
                  <span className="ml-2 line-through text-gray-400">${product.price.toFixed(2)}</span>
                  <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm font-semibold">
                    {product.discount}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
              )}
              <p className="text-sm text-gray-500 mt-1">In stock: {product.stock} items</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <span className="font-semibold block mb-2">Color</span>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <button 
                    key={index} 
                    className={`px-4 py-2 border rounded-md transition-all ${index === 0 ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <span className="font-semibold block mb-2">Quantity</span>
              <div className="flex items-center border rounded-md w-36">
                <button 
                  onClick={decrementQuantity} 
                  className="flex-1 py-2 px-4 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  <span className={quantity <= 1 ? "text-gray-300" : "text-gray-600"}>−</span>
                </button>
                <span className="flex-1 text-center py-2">{quantity}</span>
                <button 
                  onClick={incrementQuantity} 
                  className="flex-1 py-2 px-4 hover:bg-gray-100 transition-colors"
                  disabled={quantity >= product.stock}
                >
                  <span className={quantity >= product.stock ? "text-gray-300" : "text-gray-600"}>+</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button 
                className="flex items-center justify-center px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-md transition-colors duration-300"
                style={{ backgroundColor: "#ffcc01" }}
              >
                <span className="mr-2">🛒</span>
                Add to Cart
              </button>
              <button className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 rounded-md transition-all duration-300">
                <span className="mr-2">♥</span>
                Wishlist
              </button>
              <button className="flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 rounded-md transition-all duration-300">
                <span className="mr-2">↗</span>
                Share
              </button>
            </div>

            {/* Fast Delivery */}
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-8">
              <h3 className="font-semibold text-blue-800" style={{ color: "#23598e" }}>Fast & Free Delivery</h3>
              <p className="text-sm text-gray-600">Free shipping on orders over $50. Estimated delivery: 2-4 business days.</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
              <div className="flex space-x-8">
                <button 
                  className={`py-2 px-1 -mb-px ${activeTab === 'description' ? 'border-b-2 border-yellow-400 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('description')}
                  style={{ borderColor: activeTab === 'description' ? "#ffcc01" : "" }}
                >
                  Description
                </button>
                <button 
                  className={`py-2 px-1 -mb-px ${activeTab === 'specifications' ? 'border-b-2 border-yellow-400 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                  onClick={() => setActiveTab('specifications')}
                  style={{ borderColor: activeTab === 'specifications' ? "#ffcc01" : "" }}
                >
                  Specifications
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'description' && (
              <div className="text-gray-700 mb-8">
                <p className="mb-4">{product.description}</p>
                <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="text-gray-700 mb-8">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="py-2 px-4 font-medium">{key}</td>
                        <td className="py-2 px-4">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {product.reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold">{review.user}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            View All Reviews
          </button>
        </div>
      </div>
</div>
);
};

export default Product;
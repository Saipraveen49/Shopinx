import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, products, updateQuantity, getTotalPrice, removeFromCart } = useContext(ShopContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = [];

        for (const itemId in cart) {
            for (const size in cart[itemId]) {
                const product = products.find(p => p._id === itemId);
                if (product) {
                    items.push({
                        id: itemId,
                        name: product.name,
                        price: product.price,
                        image: product.images[0],
                        size,
                        quantity: cart[itemId][size],
                    });
                }
            }
        }

        setCartItems(items);
    }, [cart, products]); // Only run when cart or products change

    return (
        <div className='p-4 max-w-4xl mx-auto'>
            <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className='text-center text-gray-600'>
                    <p>Your cart is empty 😞</p>
                    <Link to='/' className='text-blue-500'>Go shopping</Link>
                </div>
            ) : (
                <div>
                    {/* Cart Table */}
                    <div className='overflow-x-auto'>
                        <table className='w-full border border-gray-300'>
                            <thead>
                                <tr className='bg-gray-200 text-left'>
                                    <th className='p-2'>Product</th>
                                    <th className='p-2'>Size</th>
                                    <th className='p-2'>Price</th>
                                    <th className='p-2'>Quantity</th>
                                    <th className='p-2'>Total</th>
                                    <th className='p-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id + item.size} className='border-t'>
                                        <td className='p-2 flex items-center gap-2'>
                                            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
                                            <span>{item.name}</span>
                                        </td>
                                        <td className='p-2'>{item.size}</td>
                                        <td className='p-2'>₹{item.price}</td>
                                        <td className='p-2 flex items-center gap-2'>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                className='bg-gray-300 px-2 rounded'>-</button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                className='bg-gray-300 px-2 rounded'>+</button>
                                        </td>
                                        <td className='p-2'>₹{(item.price * item.quantity).toFixed(2)}</td>
                                        <td className='p-2'>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className='text-red-500'>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Summary 
                    <div className='mt-6 p-4 bg-gray-100 rounded shadow-md'>
                        <h3 className='text-xl font-semibold'>Cart Summary</h3>
                        <p className='text-lg mt-2'>Total: <strong>₹{getTotalPrice().toFixed(2)}</strong></p>
                        <button className='w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600'>Checkout</button>
                    </div>*/}
                </div>
            )}
        </div>
    );
};

export default Cart;

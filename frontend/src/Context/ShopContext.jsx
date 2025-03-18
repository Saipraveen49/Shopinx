import { createContext, useEffect, useState } from "react";
import { assets} from "../assets/assets.js";
export const ShopContext=createContext();
const ShopContextProvider = (props)=>{
    const rupees = '₹'
    const stores = [
        {
            id: 1,
            name: "Fresh Mart",
            address: "123 Main St, City",
            distance: "1.2 km",
            rating: 4.5,
            phone: "+91 98765 43210",
            openingHours: "9:00 AM - 9:00 PM",
            isOpen: true,
            categories: ["Groceries", "Fruits", "Dairy"],
            offers: "10% off on fresh vegetables",
            verified: true,
            deliveryAvailable: true,
            paymentMethods: ["Cash", "UPI", "Cards"],
            images: assets.seller,
            reviews: 149,
        },
        {
            id: 2,
            name: "Tech Store",
            address: "45 Tech Road, City",
            distance: "2.5 km",
            rating: 4.7,
            phone: "+91 99887 66554",
            openingHours: "10:00 AM - 8:00 PM",
            isOpen: false,
            categories: ["Electronics", "Accessories"],
            offers: "Buy 1 Get 1 Free on Accessories",
            verified: false,
            deliveryAvailable: false,
            paymentMethods: ["Cash", "Cards"],
            images:assets.seller,
            reviews: 210,
        },
    ];
    const products = [
        {
            _id: "aaaaa",
            name: "Women Round Neck Cotton Top",
            description: "A lightweight, knitted pullover shirt with a round neckline and short sleeves.",
            price: 100,
            image: [assets.p_img1],
            category: "Women",
            subCategory: "Topwear",
            sizes: ["S", "M", "L"],
            date: 1716634345448,
            bestseller: false,
            storeId: 1, // Linked to Fresh Fashion
        },
        {
            _id: "bbbbb",
            name: "Men's Casual Cotton Shirt",
            description: "Comfortable and stylish cotton shirt perfect for casual outings.",
            price: 120,
            image: [assets.p_img1],
            category: "Men",
            subCategory: "Shirts",
            sizes: ["M", "L", "XL"],
            date: 1716634345448,
            bestseller: true,
            storeId: 1, // Linked to Fresh Fashion
        },
        {
            _id: "ccccc",
            name: "Women's Denim Jacket",
            description: "Classic denim jacket for all-season wear.",
            price: 200,
            image: [assets.p_img1],
            category: "Women",
            subCategory: "Outerwear",
            sizes: ["S", "M", "L", "XL"],
            date: 1716634345448,
            bestseller: true,
            storeId: 2, // Linked to Trendy Outfits
        },
    ];
    const [cart, setCart] = useState([]);
    const addToCart = (id, name, price, image) => {
        setCart((prevCart) => {
            // Check if item already exists in the cart
            const existingItem = prevCart.find((item) => item.id === id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            // Add new item to cart
            return [...prevCart, { id, name, price, image, quantity: 1 }];
        });
    };

    // Function to Remove Item from Cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Function to Update Cart Quantity
    const updateCart = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };
    const getCartCount=()=>{
        
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].quantity;
            }
            return total;
        
        
    }

    // Function to Get Total Price
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(()=>{
        getCartCount()
    },[cart])

    const value={
        products,
        rupees,stores,updateCart,removeFromCart,getTotalPrice,cart,setCart,addToCart,getCartCount
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
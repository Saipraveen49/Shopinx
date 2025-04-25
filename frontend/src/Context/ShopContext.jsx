import { createContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
export const ShopContext = createContext();
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";
const ShopContextProvider = (props) => {
    const rupees = '₹'
    const backendUrl = 'http://localhost:3000'
    const [token, setToken] = useState("")
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [uname,setUname]=useState("")
    const storeImage=assets.seller;
    
    const [cart, setCart] = useState([]);

    const getCartCount = () => {
        let total = 0;
        for (let itemId in cart) {
            for (let size in cart[itemId]) {
                total += cart[itemId][size];
            }
        }
        return total;
    };

    // Function to Get Total Price
    {/*const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };*/}
    const getUserCart = async (token) => {
        try {

            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) {
                setCart(response.data.cartData)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }
    const addToCart = async (itemId, size) => {
        const finalSize = size || "default";
        let cartData = structuredClone(cart);

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (!cartData[itemId][finalSize]) {
            cartData[itemId][finalSize] = 0;
        }

        cartData[itemId][finalSize] += 1;
        setCart(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size: finalSize }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };
    const removeFromCart = async (itemId, size = "default") => {
        try {
            const response = await axios.post(`${backendUrl}/api/cart/remove`, { itemId, size }, {
                headers: { token }
            });
            console.log(response);
            if (response.data.success) {
                toast.success(response.data.message);
                let cartData = structuredClone(cart);
                if (cartData[itemId] && cartData[itemId][size]) {
                    delete cartData[itemId][size];
                    if (Object.keys(cartData[itemId]).length === 0) {
                        delete cartData[itemId];
                    }
                }
                setCart({ ...cartData });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const updateQuantity = async (itemId, size, quantity) => {
        const finalSize = size || "default";
        let cartData = structuredClone(cart);
        cartData[itemId][finalSize] = quantity;
        setCart(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size: finalSize, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    }
    useEffect(() => {
        getProductsData();
    }, [])
    useEffect(() => {
        getCartCount()
    }, [cart])
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))

        }
    }, [])
    useEffect(()=>{
        if (!token && localStorage.getItem('token')) {
            getUserCart(localStorage.getItem('token'))
        }
    },[removeFromCart])
    const [stores, setStores] = useState([])
    const getStores = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/store/list');
            console.log(response.data);
            if (response.data.success) {
                setStores(response.data.stores);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    
    useEffect(() => {
        getStores()
    }, [])
    const value = {
        products,
        rupees, stores,
        cart, setCart, addToCart, getCartCount, backendUrl, token, setToken,
        navigate,updateQuantity,getUserCart,uname,setUname,getStores,storeImage,
        removeFromCart

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider


// const stores = [
    //     {
    //         id: 1,
    //         name: "Fresh Mart",
    //         address: "123 Main St, City",
    //         distance: "1.2 km",
    //         rating: 4.5,
    //         phone: "+91 98765 43210",
    //         openingHours: "9:00 AM - 9:00 PM",
    //         isOpen: true,
    //         categories: ["Groceries", "Fruits", "Dairy"],
    //         offers: "10% off on fresh vegetables",
    //         verified: true,
    //         deliveryAvailable: true,
    //         paymentMethods: ["Cash", "UPI", "Cards"],
    //         images: assets.seller,
    //         reviews: 149,
    //     },
    //     {
    //         id: 2,
    //         name: "Tech Store",
    //         address: "45 Tech Road, City",
    //         distance: "2.5 km",
    //         rating: 4.7,
    //         phone: "+91 99887 66554",
    //         openingHours: "10:00 AM - 8:00 PM",
    //         isOpen: false,
    //         categories: ["Electronics", "Accessories"],
    //         offers: "Buy 1 Get 1 Free on Accessories",
    //         verified: false,
    //         deliveryAvailable: false,
    //         paymentMethods: ["Cash", "Cards"],
    //         images: assets.seller,
    //         reviews: 210,
    //     },
    // ];
    // const producs = [
    //     {
    //         _id: "aaaaa",
    //         name: "Women Round Neck Cotton Top",
    //         description: "A lightweight, knitted pullover shirt with a round neckline and short sleeves.",
    //         price: 100,
    //         image: [assets.p_img1],
    //         category: "Women",
    //         subCategory: "Topwear",
    //         sizes: ["S", "M", "L"],
    //         date: 1716634345448,
    //         bestseller: false,
    //         storeId: 1, // Linked to Fresh Fashion
    //     },
    //     {
    //         _id: "bbbbb",
    //         name: "Men's Casual Cotton Shirt",
    //         description: "Comfortable and stylish cotton shirt perfect for casual outings.",
    //         price: 120,
    //         image: [assets.p_img1],
    //         category: "Men",
    //         subCategory: "Shirts",
    //         sizes: ["M", "L", "XL"],
    //         date: 1716634345448,
    //         bestseller: true,
    //         storeId: 1, // Linked to Fresh Fashion
    //     },
    //     {
    //         _id: "ccccc",
    //         name: "Women's Denim Jacket",
    //         description: "Classic denim jacket for all-season wear.",
    //         price: 200,
    //         image: [assets.p_img1],
    //         category: "Women",
    //         subCategory: "Outerwear",
    //         sizes: ["S", "M", "L", "XL"],
    //         date: 1716634345448,
    //         bestseller: true,
    //         storeId: 2, // Linked to Trendy Outfits
    //     },
    // ];
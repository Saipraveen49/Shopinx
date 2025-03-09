import { createContext, useState } from "react";
import { products } from "../assets/assets.js";
export const ShopContext=createContext();
const ShopContextProvider = (props)=>{
    const rupees = '₹'
    const value={
        products,
        rupees
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
const StoreProducts = () => {
    const { stores, products } = useContext(ShopContext)
    const { id } = useParams();
    const store = stores.find(store => store.id === parseInt(id))

    const storeProducts = products.filter(product => product.storeId === parseInt(id));

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center">{store.name}</h1>
            <p className="text-center text-gray-500">{store.address} - 📞 {store.phone}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {storeProducts.length > 0 ? (
                storeProducts.map((item, index) => (
                        <ProductItem key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
            />
            ))
            ) : (
            <p className="text-center col-span-3 text-gray-500">No products available for this store</p>
                )}
        </div>
        </div>
    )
}

export default StoreProducts

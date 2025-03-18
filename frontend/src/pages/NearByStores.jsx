import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const StoreCard = ({ store }) => {
    return (
        <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition duration-300 bg-white w-full max-w-sm mx-auto flex flex-col">
            <img
                className="w-full h-48 object-cover rounded-lg"
                src={store.images}
                alt={store.name}
            />
            <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-800">{store.name}</h3>
                        {store.verified && (
                            <span className="text-green-500 text-sm">✔ Verified</span>
                        )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">📍 {store.address} - {store.distance} away</p>
                    <p className="text-gray-700 text-sm">⭐ {store.rating} ({store.reviews} reviews)</p>
                    <p className="text-gray-600 text-sm">📞 {store.phone}</p>
                    <p className={`text-sm font-semibold ${store.isOpen ? 'text-green-600' : 'text-red-500'}`}>
                        {store.isOpen ? "Open Now" : "Closed"}
                    </p>
                    <p className="text-sm text-blue-600">🎟 {store.offers}</p>
                    <p className="text-sm">🚚 {store.deliveryAvailable ? "Home Delivery Available" : "Pickup Only"}</p>
                    <p className="text-sm">💳 Payment: {store.paymentMethods.join(", ")}</p>
                </div>
                <div className="mt-4">
                    <Link 
                        to={`/store/${store.id}`} 
                        className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

const NearbyStores = () => {
    const { stores } = useContext(ShopContext);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Nearby Stores</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {stores.map((store) => (
                    <StoreCard key={store.id} store={store} />
                ))}
            </div>
        </div>
    );
};

export default NearbyStores;
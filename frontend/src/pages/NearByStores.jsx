import React from "react";
import { Link } from "react-router-dom";

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
        images: ["/images/store1.jpg", "/images/store1-inside.jpg"],
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
        images: ["/images/store2.jpg"],
        reviews: 210,
    },
];

const StoreCard = ({ store }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 bg-white w-full max-w-md mx-auto">
            <img
                className="w-full h-40 object-cover rounded-lg"
                src={store.images[0]}
                alt={store.name}
            />
            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{store.name}</h3>
                    {store.verified && (
                        <span className="text-green-500 text-sm">✔ Verified</span>
                    )}
                </div>
                <p className="text-gray-500 text-sm">{store.address}</p>
                <p className="text-gray-500 text-sm">📍 {store.distance} away</p>
                <p className="text-gray-700 text-sm">⭐ {store.rating} ({store.reviews} reviews)</p>
                <p className="text-gray-600 text-sm">📞 {store.phone}</p>
                <p className={`text-sm font-semibold ${store.isOpen ? 'text-green-600' : 'text-red-500'}`}>
                    {store.isOpen ? "Open Now" : "Closed"}
                </p>
                <p className="text-sm text-blue-600">🎟 {store.offers}</p>
                <p className="text-sm">🚚 {store.deliveryAvailable ? "Home Delivery Available" : "Pickup Only"}</p>
                <p className="text-sm">💳 Payment: {store.paymentMethods.join(", ")}</p>
                <div className="mt-3">
                    <Link to={`/store/${store.id}`} className="text-blue-500 hover:underline">View Details</Link>
                </div>
            </div>
        </div>
    );
};

const NearbyStores = () => {
    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-5">Nearby Stores</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stores.map((store) => (
                    <StoreCard key={store.id} store={store} />
                ))}
            </div>
        </div>
    );
};

export default NearbyStores;

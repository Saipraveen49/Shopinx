import React, { useEffect, useState } from "react";

const LocationFinder = ({ setShowModal }) => {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [villageName, setVillageName] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]); // Store multiple results

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                    await getVillageName(latitude, longitude);
                },
                (error) => {
                    console.error("Geolocation Error:", error);
                }
            );
        } else {
            console.error("Geolocation not supported.");
        }
    };

    const getVillageName = async (lat, lon) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await response.json();
            setVillageName(data.address.village || data.address.town || data.address.city || "Unknown");
        } catch (error) {
            console.error("Error fetching village name:", error);
        }
    };

    const searchVillage = async () => {
        if (!searchQuery) return;
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&countrycodes=IN&addressdetails=1`
            );
            const data = await response.json();
            if (data.length > 0) {
                setSearchResults(data); // Store all results
            } else {
                setSearchResults([{ display_name: "Village not found", lat: null, lon: null }]);
            }
        } catch (error) {
            console.error("Error searching for village:", error);
        }
    };

    const selectVillage = (village) => {
        setVillageName(village.display_name);
        setLocation({ lat: village.lat, lon: village.lon });
        setSearchResults([]); // Hide suggestions after selection
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Select Your Location</h2>

            {/* Search Input */}
            <input
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Search for a village..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                onClick={searchVillage}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
                Search
            </button>

            {/* Display Search Results */}
            {searchResults.length > 0 && (
                <ul className="mt-2 bg-white border rounded shadow-md max-h-40 overflow-auto">
                    {searchResults.map((result, index) => (
                        <li
                            key={index}
                            onClick={() => selectVillage(result)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                        >
                            {result.display_name}
                        </li>
                    ))}
                </ul>
            )}

            {/* Selected Location */}
            <p className="mt-4 font-semibold">Selected Location: {villageName}</p>
        </div>
    );
};

export default LocationFinder;

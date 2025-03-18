import React, { useEffect, useState } from "react";

const NewArrivals = () => {
  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div className="py-12 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-extrabold mb-4">🚀 New Arrivals Coming In:</h2>
      <p className="text-2xl font-semibold text-yellow-400">{formatTime(timeLeft)}</p>
      <p className="mt-2 text-sm text-gray-300">Stay tuned for our exclusive launches!</p>
    </div>
  );
};

export default NewArrivals;

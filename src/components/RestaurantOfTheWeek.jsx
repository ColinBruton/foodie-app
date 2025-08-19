import { useEffect, useState } from "react";

export default function RestaurantOfTheWeek() {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from your Express backend (proxy in vite.config.js handles /api)
    fetch("/api/restaurant-of-the-week")
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching restaurant:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-1/2 bg-[rgb(213,204,194)] rounded-3xl mx-auto h-[80%] flex flex-col items-center justify-center p-12 shadow-lg">
      <h2 className="text-[36px] md:text-[48px] font-bold text-[rgb(199,93,44)] mb-6 text-center leading-tight">
        Restaurant of the Week
      </h2>

      {loading ? (
        <p className="text-lg text-[rgb(199,93,44)]">Loading...</p>
      ) : restaurant ? (
        <>
          <p className="text-[20px] md:text-[28px] text-center text-[rgb(199,93,44)] leading-relaxed">
            Check out Knoxville's featured spot this week:
            <span className="block font-bold text-[22px] md:text-[30px] mt-2">
              {restaurant.name}
            </span>
          </p>
          <p className="text-md md:text-lg text-center text-gray-700 mt-4 max-w-md">
            {restaurant.description}
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">
            📍 {restaurant.address}
          </p>
        </>
      ) : (
        <p className="text-lg text-red-600">No restaurant found.</p>
      )}
    </div>
  );
}

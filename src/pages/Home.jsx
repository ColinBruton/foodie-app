import Layout from "../components/Layout";
import backgroundImage from "../assets/foodie1.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setFadeIn(true);

    // Fetch restaurant of the week from backend
    fetch("http://localhost:5000/api/restaurant-of-the-week")
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.error("Error fetching restaurant:", err));
  }, []);

  return (
    <Layout>
      <div className="w-screen">
        {/* Hero section */}
        <div className="relative w-screen h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background image with blur */}
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(4px)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          ></div>

          {/* Glass blur panel with text */}
          <div
            className={`
              relative px-8 py-6 bg-white/30 backdrop-blur-md rounded-xl
              transition-transform duration-1000
              ${fadeIn ? "motion-preset-slide-right" : "translate-x-[-100%]"}
              z-10
            `}
          >
            {/* Main heading */}
            <h1 className="text-[96px] sm:text-[120px] md:text-[160px] font-bold text-white drop-shadow-lg text-center leading-tight">
              Welcome to Quick Bites!
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-[32px] sm:text-[40px] md:text-[48px] text-white drop-shadow-md text-center">
              Knoxville’s One Stop Shop for Food Lovers
            </p>
          </div>
        </div>

        {/* Restaurant of the Week Section */}
        <div
          className="w-full flex items-center justify-center"
          style={{
            minHeight: "50vh",
            backgroundColor: "rgb(248, 178, 89)",
            paddingBottom: "1rem",
          }}
        >
          {restaurant ? (
            <div className="w-1/2 bg-[rgb(213,204,194)] rounded-3xl mx-auto h-[80%] flex flex-col items-center justify-center p-12 shadow-lg">
              <h2 className="text-[36px] md:text-[48px] font-bold text-[rgb(199,93,44)] mb-6 text-center leading-tight">
                Restaurant of the Week
              </h2>
              <p className="text-[20px] md:text-[28px] text-center text-[rgb(199,93,44)] leading-relaxed">
                Check out Knoxville's featured spot this week:{" "}
                <span className="font-bold text-[22px] md:text-[30px]">
                  {restaurant.name}
                </span>
              </p>
              <p className="mt-4 text-[18px] md:text-[22px] text-center text-[rgb(199,93,44)]">
                {restaurant.description}
              </p>
              <p className="mt-2 text-[16px] md:text-[20px] italic text-center text-[rgb(199,93,44)]">
                📍 {restaurant.address}
              </p>
            </div>
          ) : (
            <p className="text-xl text-center text-[rgb(199,93,44)]">
              Loading restaurant of the week...
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

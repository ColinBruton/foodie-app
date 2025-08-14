import Layout from "../components/Layout";
import backgroundImage from "../assets/foodie1.jpg";
import { useEffect, useState } from "react";
import RestaurantOfTheWeek from "../components/RestaurantOfTheWeek";


export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Layout>
      <div className="w-screen">
        {/* Hero section */}
        <div className="relative w-screen h-[50vh] flex items-center justify-center overflow-hidden">
          
          {/* Background image with blur via style */}
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(4px)', // adjust blur amount here
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
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

        {/* Bottom section */}
        <div
          className="w-full flex items-center justify-center"
          style={{
            minHeight: "50vh",
            backgroundColor: "rgb(248, 178, 89)",
            paddingBottom: "1rem", // controls how low the panel sits
          }}
        >
          <RestaurantOfTheWeek />
        </div>
      </div>
    </Layout>
  );
}


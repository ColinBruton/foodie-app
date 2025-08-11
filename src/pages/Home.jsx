import Layout from "../components/Layout";
import backgroundImage from "../assets/foodie1.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Layout>
      <div>
        {/* Top row: two halves side by side, each 60vh tall */}
        <div className="flex" style={{ height: "60vh" }}>
          {/* Left half with blurred background */}
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              width: "50vw",
              height: "60vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)"
            }}
          ></div>

          {/* Right half with centered content */}
          <div className="w-1/2 flex justify-center items-center bg-[rgb(243,233,220)]" style={{ height: "60vh" }}>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-[rgb(199,93,44)] text-center">
                Welcome to Quick Bites!
              </h1>

              <div className="mt-4 text-[rgb(199,93,44)] text-center ">
                <p className="text-xl">
                  Knoxville's One Stop Shop for Food Lovers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Below both halves: full width container with light orange background */}
        <div className="w-full" style={{ backgroundColor: "rgb(248, 178, 89)", minHeight: "40vh" }}>
          {/* You can put any content here or leave empty for just color */}
        </div>
      </div>
    </Layout>
  );
}

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Suggestions from "./pages/Suggestions";
import Random from "./pages/Random";

export default function App() {
  // Array with inline rgb backgrounds
  const navItems = [
    { to: "/", label: "Home", bg: "rgb(248, 178, 89)" },       // light brown
    { to: "/reviews", label: "Reviews", bg: "rgb(243, 233, 220)" }, // dark brown
    { to: "/suggestions", label: "Suggestions", bg: "rgb(248, 178, 89)" }, // tan
    { to: "/random", label: "Random", bg: "rgb(243, 233, 220)" }, // white/greyish
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex w-full">
        {navItems.map(({ to, label, bg }) => {
          const isDarkBg = bg !== "rgb(243, 233, 220)";
          const textColor = isDarkBg ? "white" : "rgb(199, 93, 44)";

          return (
            <Link
              key={to}
              to={to}
              style={{ backgroundColor: bg, color: textColor }}
              className="flex-1 py-6 text-center rounded-none hover:opacity-80 transition-opacity duration-200"
            >
              {label}
            </Link>
          );
        })}
      </nav>


      {/* Page content fills remaining height */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </div>
  );
}


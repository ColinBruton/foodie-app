import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Suggestions from "./pages/Suggestions";
import Random from "./pages/Random";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white flex space-x-6">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/reviews" className="hover:text-blue-400">Reviews</Link>
        <Link to="/suggestions" className="hover:text-yellow-400">Suggestions</Link>
        <Link to="/random" className="hover:text-purple-400">Random</Link>
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

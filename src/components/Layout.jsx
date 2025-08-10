import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import the Auth Context
import { logout } from "../auth"; // Import the logout function

const Header = () => {
  const { user } = useAuth(); // Access the current user from AuthContext

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="bg-purple-300 p-6 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <h1 className="text-5xl font-black text-purple-900 hover:text-purple-700 transition duration-300 mb-4 md:mb-0">
          <Link to="/" className="text-purple-800 font-bubble">
            Jacob's Pet Supplies
          </Link>
        </h1>

        {/* Navigation */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            <li>
              <Link
                to="/"
                className="text-2xl text-purple-900 font-extrabold transition duration-500 hover:text-pastelYellow hover:animate-pulseSlow"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-2xl text-purple-900 font-extrabold transition duration-500 hover:text-pastelYellow hover:animate-pulseSlow"
              >
                Products
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to="/rescue"
                    className="text-2xl text-purple-900 font-extrabold transition duration-500 hover:text-pastelYellow hover:animate-pulseSlow"
                  >
                    Rescue Dogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subscribe"
                    className="text-2xl text-purple-900 font-extrabold transition duration-500 hover:text-pastelYellow hover:animate-pulseSlow"
                  >
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-2xl text-purple-900 font-extrabold transition duration-500 hover:text-pastelYellow hover:animate-pulseSlow"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <span
                    onClick={handleLogout}
                    className="text-2xl text-purple-900 font-extrabold cursor-pointer transition duration-500 hover:text-red-500 hover:animate-pulseSlow"
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
            {!user && (
              <li>
                <Link
                  to="/login"
                  className="text-2xl text-purple-900 font-extrabold transition duration-500 hover:text-pastelYellow hover:animate-pulseSlow"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { logout } from "../auth";

const Header = () => {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <header className="bg-purple-300 p-4 shadow-lg sticky top-0 z-50 lg:static">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-black text-purple-900 hover:text-purple-700 transition">
            <Link to="/" className="text-purple-800 font-bubble">
              Jacob's Pet Supplies
            </Link>
          </h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-purple-900 focus:outline-none"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:block w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
              <li>
                <Link
                  to="/"
                  aria-label="Navigate to Home"
                  className="text-lg md:text-xl text-purple-900 font-bold hover:text-pastelYellow"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  aria-label="View our featured products"
                  className="text-lg md:text-xl text-purple-900 font-bold hover:text-pastelYellow"
                >
                  Products
                </Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link
                      to="/rescue"
                      aria-label="Learn about rescue dogs"
                      className="text-lg md:text-xl text-purple-900 font-bold hover:text-pastelYellow"
                    >
                      Rescue Dogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/subscribe"
                      aria-label="Subscribe for updates and discounts"
                      className="text-lg md:text-xl text-purple-900 font-bold hover:text-pastelYellow"
                    >
                      Subscribe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      aria-label="Go to your dashboard"
                      className="text-lg md:text-xl text-purple-900 font-bold hover:text-pastelYellow"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <span
                      onClick={handleLogout}
                      aria-label="Log out of your account"
                      className="text-lg md:text-xl text-purple-900 font-bold cursor-pointer hover:text-red-500"
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
                    aria-label="Log in to your account"
                    className="text-lg md:text-xl text-purple-900 font-bold hover:text-pastelYellow"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

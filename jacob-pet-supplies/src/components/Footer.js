import React from "react";
import { useAuth } from "../AuthContext";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="bg-purple-300 text-purple-800 font-black text-center p-6 shadow-inner">
      <p className="text-2xl">© 2025 Jacob's Pet Supplies. All rights reserved.</p>
      <p className="text-lg mt-2">12 Petville Road, Barkson, Stoke on Trent ST2 6TP</p>
      <p className="text-lg mt-2">Tel: 01782 300403</p>
      <div className="mt-4 space-x-4">
        <span className="text-gray-600 cursor-default">Privacy Policy</span>
        <span className="text-gray-600 cursor-default">Terms of Service</span>
        <span className="text-gray-600 cursor-default">Contact Us</span>
      </div>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-purple-600 transition"
        >
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-purple-600 transition"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-purple-600 transition"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-purple-600 transition"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
      </div>
      <p className="text-lg mt-4">
        {user
          ? `Welcome back, ${user.email}!` 
          : "Built with ❤️ by Jacob's Team."}
      </p>
    </footer>
  );
};

export default Footer;

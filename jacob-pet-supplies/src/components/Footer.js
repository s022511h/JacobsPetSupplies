import React from "react";
import { useAuth } from "../AuthContext"; // Import the Auth Context

const Footer = () => {
  const { user } = useAuth(); // Access the current user from AuthContext

  return (
    <footer className="bg-purple-300 text-purple-800 font-black text-center p-6 shadow-inner">
      <p className="text-2xl">© 2024 Jacob's Pet Supplies. All rights reserved.</p>
      <p className="text-lg mt-2">
        {user
          ? `Welcome back, ${user.email}!` // Personalized message if logged in
          : "Built with ❤️ by Jacob's Team."}
      </p>
    </footer>
  );
};

export default Footer;

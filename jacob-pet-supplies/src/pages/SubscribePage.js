import React, { useState } from "react";
import { useAuth } from "../AuthContext"; // Import authentication context

const SubscribePage = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="p-8 bg-purple-50 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-black text-purple-800 mb-6">Subscribe</h1>
      {isSubscribed ? (
        <div className="text-center">
          <h2 className="text-2xl text-purple-700 mb-4">
            Thank you for subscribing!
          </h2>
          {user ? (
            <a
              href="https://github.com/s022511h/JacobsPetSupplies-Assets/raw/main/discount-voucher.pdf"
              download
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
            >
              Download Your Discount Voucher
            </a>
          ) : (
            <p className="text-lg text-purple-600">
              Login to access exclusive offers and download vouchers.
            </p>
          )}
        </div>
      ) : (
        <form
          onSubmit={handleSubscribe}
          className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md"
        >
          <label
            htmlFor="email"
            className="block text-lg font-bold text-purple-600 mb-2"
          >
            Enter your email to subscribe:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-purple-400 rounded p-2 w-full mb-4"
            placeholder="youremail@example.com"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscribePage;

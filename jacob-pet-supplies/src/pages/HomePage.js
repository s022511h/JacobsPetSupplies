import React from "react";

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Jacob's Pet Supplies</h1>
      <p className="text-lg mb-6">
        Your one-stop shop for all your pet needs. Browse our products, learn
        about our rescue dogs, or subscribe to get exclusive discounts!
      </p>
      <img
        src="/assets/shop.jpg"
        alt="Jacob's Pet Supplies"
        className="w-full rounded shadow"
      />
    </div>
  );
};

export default HomePage;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showCTAs, setShowCTAs] = useState(true);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-6xl font-handwritten mb-10 text-center text-purple-700">
        Welcome to Jacob's Pet Supplies
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-2xl font-semibold text-gray-700 mb-6 leading-relaxed">
            At Jacob's Pet Supplies, we are passionate about providing the best for your furry, feathered, and scaly friends.
            From high-quality food to fun toys, we’ve got everything you need to make your pet happy and healthy.
          </p>
          <p className="text-2xl font-semibold text-gray-700 leading-relaxed">
            We also partner with <span className="text-purple-700 font-bold">Sherlock Rescue</span> to help rescue animals find loving homes.
            With every purchase, you’re supporting a cause that ensures food, shelter, and medical care for animals in need.
          </p>
        </div>

        <div className="relative w-full">
          <img
            src="/assets/homepage.webp"
            alt="Jacob's Pet Supplies"
            className="w-full h-auto max-h-[80vh] object-contain rounded shadow-lg"
          />
        </div>
      </div>

      <div className="space-y-16">
        <div className="bg-pastelPink p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-purple-700 mb-6">Our Featured Products</h2>
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
            Discover premium products carefully selected for your pets. Whether it’s toys, grooming supplies, or nutritious food,
            we’ve got everything your pets need to stay happy and healthy.
          </p>
          <Link
            to="/products"
            className="bg-purple-700 text-white px-10 py-5 rounded-lg hover:bg-purple-800 transition inline-block text-2xl font-bold"
          >
            View Products
          </Link>
        </div>

        <div className="bg-pastelPink p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-purple-700 mb-6">Support Sherlock Rescue</h2>
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
            Together, we can make a difference! Every purchase at Jacob's Pet Supplies helps fund food, shelter, and medical
            care for rescue animals. Visit our rescue page to meet the amazing dogs waiting for their forever homes.
          </p>
          <Link
            to="/rescue"
            className="bg-purple-700 text-white px-10 py-5 rounded-lg hover:bg-purple-800 transition inline-block text-2xl font-bold"
          >
            Meet Our Rescue Dogs
          </Link>
        </div>

        <div className="bg-pastelPink p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-purple-700 mb-6">Subscribe for Exclusive Discounts</h2>
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
            Don’t miss out on exclusive deals and offers! Subscribe now to get a discount voucher for your next in-store purchase.
            Be the first to know about new products, events, and promotions.
          </p>
          <Link
            to="/subscribe"
            className="bg-purple-700 text-white px-10 py-5 rounded-lg hover:bg-purple-800 transition inline-block text-2xl font-bold"
          >
            Subscribe Now
          </Link>
        </div>
      </div>

      {showCTAs && (
        <div className="fixed bottom-4 right-4 flex flex-col gap-4 lg:bottom-6 lg:right-6 lg:gap-6">
          <button
            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full"
            onClick={() => setShowCTAs(false)}
          >
            X
          </button>
          <Link
            to="/rescue"
            className="bg-pastelPink text-purple-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-pastelPurple transition text-lg font-semibold text-center lg:px-8 lg:py-4 lg:text-2xl lg:font-bold"
          >
            Meet Rescue Dogs
          </Link>
          <Link
            to="/subscribe"
            className="bg-pastelYellow text-purple-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-pastelPurple transition text-lg font-semibold text-center lg:px-8 lg:py-4 lg:text-2xl lg:font-bold"
          >
            Subscribe Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;

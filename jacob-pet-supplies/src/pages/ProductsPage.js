import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [showCTAs, setShowCTAs] = useState(true);

  useEffect(() => {
    fetch("/assets/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold mb-8 text-purple-700">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={process.env.PUBLIC_URL + product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="text-xl font-bold mt-4 text-purple-800">
              {product.name}
            </h3>
            <p className="text-lg text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
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

export default ProductsPage;

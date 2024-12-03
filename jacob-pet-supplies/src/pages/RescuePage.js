import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"; // Import for redirection
import { useAuth } from "../AuthContext"; // Import authentication context
import PetCard from "../components/PetCard";

const RescuePage = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/s022511h/JacobsPetSupplies-Assets/refs/heads/main/pets.json"
    )
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <Navigate to="/login" />; // Redirect unauthenticated users to LoginPage
  }

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <h1 className="text-5xl font-black text-purple-800 text-center mb-6">
        Rescue Dogs
      </h1>
      <div className="bg-pastelYellow p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-bold text-purple-700">
          Help Us Find Forever Homes!
        </h2>
        <p className="text-lg text-purple-600 mt-2">
          Our rescue center is dedicated to connecting these loving dogs with
          caring families. Click on a dog to learn more about their story and
          how you can adopt them.
        </p>
      </div>
      {selectedDog ? (
        <PetCard
          pet={selectedDog}
          onBack={() => setSelectedDog(null)} // Clear the selected dog to go back to the list
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              onClick={() => setSelectedDog(dog)} // Set selected dog on click
              className="cursor-pointer border border-purple-400 bg-purple-100 p-4 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center"
            >
              <div className="w-full h-64 bg-white flex items-center justify-center">
                <img
                  src={`/assets/optimized/${dog.image.split("/").pop()}`}
                  alt={dog.name}
                  className="max-w-full max-h-full rounded-md"
                  loading="lazy"
                />
              </div>
              <h2 className="text-3xl font-extrabold text-purple-700 mt-4">
                {dog.name}
              </h2>
              <p className="text-xl text-purple-600">{dog.breed}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RescuePage;

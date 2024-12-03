import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext"; // Import the Auth Context

const PetCard = ({ pet, onBack }) => {
  const { user } = useAuth(); // Access the current user
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (user) {
      // Fetch details only if the user is logged in
      fetch(
        "https://raw.githubusercontent.com/s022511h/JacobsPetSupplies-Assets/refs/heads/main/dogDetails.json"
      )
        .then((response) => response.json())
        .then((data) => setDetails(data[pet.id]))
        .catch((error) => console.error("Error fetching dog details:", error));
    }
  }, [pet, user]);

  if (!user) {
    return (
      <div className="text-center text-purple-800">
        <p className="text-2xl">You must be logged in to view pet details.</p>
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition duration-300"
        >
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="border border-purple-400 bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl w-full max-w-md">
        <img
          src={`/assets/optimized/${pet.image.split("/").pop()}`}
          alt={pet.name}
          className="w-full h-64 object-cover rounded-md"
          loading="lazy"
        />
        <h2 className="text-4xl font-black text-purple-800 mt-4">{pet.name}</h2>
        {details ? (
          <>
            <p className="text-lg text-black mt-4">{details.story}</p>
            <ul className="text-lg text-black mt-4">
              <li>
                <strong>Needs:</strong> {details.needs}
              </li>
              <li>
                <strong>Vaccinated:</strong> {details.vaccinated ? "Yes" : "No"}
              </li>
              <li>
                <strong>Trained:</strong> {details.trained ? "Yes" : "No"}
              </li>
            </ul>
          </>
        ) : (
          <p className="text-black mt-4">Loading details...</p>
        )}
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition duration-300"
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default PetCard;

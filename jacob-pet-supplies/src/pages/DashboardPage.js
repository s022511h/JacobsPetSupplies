import React, { useState, useEffect } from "react";

const DashboardPage = () => {
  const [events, setEvents] = useState([]);
  const [donationGoal, setDonationGoal] = useState(500); // Goal in £
  const [donations, setDonations] = useState(150); // Current donations in £
  const [donationAmount, setDonationAmount] = useState(""); // User-entered donation amount

  useEffect(() => {
    // Fetch rescue events
    fetch("/assets/rescueEvents.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleDonate = () => {
    const amount = parseFloat(donationAmount);
    if (!isNaN(amount) && amount > 0) {
      setDonations((prev) => prev + amount);
      alert(`Thank you for donating £${amount.toFixed(2)}!`);
      setDonationAmount(""); // Reset input field
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <h1 className="text-5xl font-bold text-purple-800 mb-6">Dashboard</h1>
      <div className="space-y-6">
        {/* Events Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Sherlock Rescue Events
          </h2>
          <ul>
            {events.map((event) => (
              <li key={event.id} className="mb-4">
                <h3 className="text-2xl font-bold text-purple-600">{event.title}</h3>
                <p className="text-lg text-purple-500">{event.date}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Donation Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Support Sherlock Rescue
          </h2>
          <p className="text-lg text-purple-600">
            Your donations help provide food, shelter, and medical care for rescue dogs.
          </p>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="bg-purple-200 h-4 rounded-lg overflow-hidden">
              <div
                className="bg-purple-700 h-4"
                style={{ width: `${(donations / donationGoal) * 100}%` }}
              ></div>
            </div>
            <p className="mt-2 text-purple-600">
              Raised £{donations.toFixed(2)} of £{donationGoal.toFixed(2)}
            </p>
          </div>

          {/* Donation Input */}
          <div className="mt-4">
            <label
              htmlFor="donation"
              className="block text-lg font-bold text-purple-600 mb-2"
            >
              Enter your donation amount (£):
            </label>
            <input
              type="number"
              id="donation"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="border border-purple-400 rounded p-2 w-full mb-4"
              placeholder="e.g., 20"
            />
            <button
              onClick={handleDonate}
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition w-full"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

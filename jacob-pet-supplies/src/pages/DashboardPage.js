import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { db } from "../firebaseConfig";

const DashboardPage = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [donationGoal, setDonationGoal] = useState(500);
  const [donations, setDonations] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [showAllEvents, setShowAllEvents] = useState(false);

  useEffect(() => {
    fetch("/assets/rescueEvents.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));

    const fetchDonations = async () => {
      if (user) {
        const donationDoc = doc(db, "donations", user.uid);
        const docSnap = await getDoc(donationDoc);

        if (docSnap.exists()) {
          setDonations(docSnap.data().totalDonations || 0);
        } else {
          await setDoc(donationDoc, { totalDonations: 0 });
          setDonations(0);
        }
      }
    };

    fetchDonations();
  }, [user]);

  const handleDonate = async () => {
    const amount = parseFloat(donationAmount);
    if (!isNaN(amount) && amount > 0) {
      try {
        const donationDoc = doc(db, "donations", user.uid);
        await updateDoc(donationDoc, {
          totalDonations: donations + amount,
        });
        setDonations((prev) => prev + amount);
        alert(`Thank you for donating £${amount.toFixed(2)}!`);
        setDonationAmount("");
      } catch (error) {
        console.error("Error updating donations:", error);
        alert("Failed to process your donation. Please try again.");
      }
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  const currentDate = new Date();
  const upcomingEvents = events.filter((event) => new Date(event.date) >= currentDate);
  const topTwoEvents = upcomingEvents.slice(0, 2);

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <h1 className="text-5xl font-bold text-purple-800 mb-6">Dashboard</h1>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Sherlock Rescue Events</h2>
          <ul>
            {topTwoEvents.map((event) => (
              <li key={event.id} className="mb-4">
                <h3 className="text-2xl font-bold text-purple-600">{event.title}</h3>
                <p className="text-lg text-purple-500">{event.date}</p>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowAllEvents(true)}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition mt-4"
          >
            View All Upcoming Events
          </button>
        </div>

        {showAllEvents && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-3xl font-bold text-purple-700 mb-4">Upcoming Events</h2>
              <ul>
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="mb-4">
                    <h3 className="text-2xl font-bold text-purple-600">{event.title}</h3>
                    <p className="text-lg text-purple-500">{event.date}</p>
                    <p>{event.description}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowAllEvents(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-4"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Support Sherlock Rescue</h2>
          <p className="text-lg text-purple-600">
            Your donations help provide food, shelter, and medical care for rescue dogs.
          </p>
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
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="border border-purple-400 rounded p-2 w-full mt-4"
            placeholder="Enter donation amount (£)"
          />
          <button
            onClick={handleDonate}
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition mt-4"
          >
            Donate Now
          </button>
        </div>

        <div className="fixed bottom-6 right-6 flex flex-col gap-6 md:hidden">
          <Link
            to="/rescue"
            className="bg-pastelPink text-purple-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-pastelPurple transition text-lg font-bold text-center"
          >
            Meet Rescue Dogs
          </Link>
          <Link
            to="/subscribe"
            className="bg-pastelYellow text-purple-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-pastelPurple transition text-lg font-bold text-center"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

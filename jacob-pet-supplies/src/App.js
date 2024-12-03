import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SubscribePage from "./pages/SubscribePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuth } from "./AuthContext"; // Import AuthContext for authentication

// Lazy loading RescuePage for optimization
const RescuePage = React.lazy(() => import("./pages/RescuePage"));

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // Redirect to Login if no user is authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage />} />

            {/* Products page */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Dashboard page */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* Rescue page */}
            <Route
              path="/rescue"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<div>Loading Rescue Page...</div>}>
                    <RescuePage />
                  </Suspense>
                </ProtectedRoute>
              }
            />

            {/* Subscribe page */}
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute>
                  <SubscribePage />
                </ProtectedRoute>
              }
            />

            {/* Login page */}
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

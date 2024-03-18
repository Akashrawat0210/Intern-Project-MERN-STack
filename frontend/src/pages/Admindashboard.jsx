// client/src/pages/DashboardPage.js

import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom'; // Import Redirect for routing
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext for accessing user information
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admindashboard = () => {
  const { user } = useContext(AuthContext); // Access user information from context

  // If user is not an admin, redirect them to another page (e.g., home page)
  if (!user || user.role !== 'admin') {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mt-5">Admin Dashboard</h2>
        {/* Add admin dashboard content here */}
      </div>
      <Footer />
    </div>
  );
};

export default Admindashboard;

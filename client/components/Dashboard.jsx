import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <hr></hr>
      <button>
        <Link to="/login">Sign out</Link>
      </button>
    </div>
  );
};

// need to have table 

export default Dashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div className="container">
      <SurveyList />
      <div className="fixed-action-btn">
        <br />
        <br />
        <Link to="/surveys/new" className="btn-floating btn-large red darken-1">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Matchup = () => {

  return (
    <div className="App">

      <header className="App-header">
        <Link className="App-link" to="/">
          <h1>Airline Trip Planner</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link className="App-link" to={"/matchup"}>My Tickets</Link>
            </li>
            <li>
              <a className="App-link" >Logout</a>
            </li>
          </ul>
        </nav>
      </header>

        <h1>My Tickets</h1>
      <div className="tickets-content">

        <br></br>

        {/* here we can loop to fill in all tickets that have been saved */}

        <div className="App-card">
          <ul>
            <li>Flight 23-J</li>
            <li>Philadelphia to New York</li>
            <li>$1200 Round Trip</li>
          </ul>
          <button>Cancel Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Matchup;

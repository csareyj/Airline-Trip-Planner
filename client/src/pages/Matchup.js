import React from "react";
import { Link } from "react-router-dom";

const Matchup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/home">
          <h1>✈ WinginGit ✈</h1>
        </Link>
        <nav>
          <ul>
            {/* <li>
              <Link className="App-link" to={"/matchup"}>
                My Tickets
              </Link>
            </li> */}
            <li>
              <Link className="App-link" to={"/users"}>
                My Profile
              </Link>
            </li>
            <li>
              <Link className="App-link" to={"/"}>
                Logout
              </Link>
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

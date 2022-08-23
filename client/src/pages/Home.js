import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_USERS } from "../utils/queries";
import { QUERY_FLIGHTS } from "../utils/queries";
import { CREATE_FLIGHTS } from "../utils/mutations";

const Home = () => {
  const { data } = useQuery(QUERY_FLIGHTS, {
    fetchPolicy: "no-cache",
  });
  const testFunction = () => {
    console.log(data);
  }

  const flightList = data?.flights || [];

  const [flightsData, setFlightData] = useState(flightList);
  const [searchOption, setSearchOption] = useState("name");

  const handleSearchChange = (event) => {
    setFlightData(flightList.filter(character => character[searchOption].toString().toLowerCase().includes(event.target.value.toLowerCase)))
  }

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/home">
          <h1>Winging It!</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link className="App-link" to={"/matchup"}>
                My Tickets
              </Link>
            </li>
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

      <div className="App-hero"></div>

      <h2>Where To?</h2>

      <form className="App-search" onChange={handleSearchOptionChange}>
        <input type="input" placeholder="From..." onChange={handleSearchChange}></input>
        <h1></h1>
        <input type="input" placeholder="To..." onChange={handleSearchChange}></input>
        <div>
          <button className="App-search-btn">Search</button>
        </div>
      </form>

      <h2 onClick={testFunction}>Results:</h2>

      <section className="App-results">
        {/* here we generate the result cards, I'll leave a template card but I don't yet know how to generate them off of the database info */}
        {flightList.map(flight => {
          return (
            <div className="App-card">
            <h3>FLIGHT {flight.flightNumber}</h3>
            <div className="Card-ori-dest">
              <p>From {flight.departure}</p>
  
              <h1></h1>
  
              <p>To {flight.destination}</p>
            </div>
            <p>{flight.duration}</p>
            <p>{flight.price}</p>
            <button>Book Flight</button>
          </div>
          )
        })}
      </section>

      <footer>
        <h3>
          Collaborative effort of David Dwight, Brandon Cheung, Sam Patel,
          Bossman Quansah, and Curtis Arey
        </h3>
      </footer>
    </div>
  );
};

export default Home;

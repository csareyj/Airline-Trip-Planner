import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_USERS } from "../utils/queries";
import { QUERY_FLIGHTS } from "../utils/queries";
// import { CREATE_FLIGHTS } from "../utils/mutations";

const Home = () => {
  const { data } = useQuery(QUERY_FLIGHTS, {
    fetchPolicy: "no-cache",
  });

  const testFunction = () => {
    console.log(data);
  }

  function addCartDemo(myObj){

    if(localStorage.getItem('project3') == null){
      localStorage.setItem('project3', '[]');
    }
    var cart = JSON.parse(localStorage.getItem('project3'));
    cart.push(myObj);

    localStorage.setItem('project3', JSON.stringify(cart));
    console.log(localStorage);
  }

  const flightList = data?.flights || [];

  // const [flightsData, setFlightData] = useState(flightList);
  // const [searchOption, setSearchOption] = useState("name");
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");

  // const handleSearchChange = (event) => {
  //   setFlightData(flightList.filter(character => character[searchOption].toString().toLowerCase().includes(event.target.value.toLowerCase)))
  // }

  // const handleSearchOptionChange = (event) => {
  //   setSearchOption(event.target.value);
  // }

  console.log(flightList.filter(flight=>flight.departure.toLowerCase().includes(query.toLowerCase())));
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-link" to="/home">
          <h1>✈ WinginGit ✈</h1>
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

      <form className="App-search">
        <input type="text" placeholder="From..." onChange={e=>setQuery(e.target.value)} className="search-bar"></input>
        <h1>🠒</h1>
        <input type="text" placeholder="To..." onChange={e=>setQuery2(e.target.value)}></input>
      </form>

      <h2 onClick={testFunction}>Results:</h2>

      <ul className="App-results">
        {/* here we generate the result cards, I'll leave a template card but I don't yet know how to generate them off of the database info */}
        {flightList.filter(flight=>flight.departure.toLowerCase().includes(query.toLowerCase())).filter(flight=>flight.destination.toLowerCase().includes(query2.toLowerCase())).map(flight => {
          return (
            <li>
            <div className="App-card">
            <h3>FLIGHT {flight.flightNumber}</h3>
            <div className="Card-ori-dest">
              <p>From {flight.departure}</p>
  
              <h1>⇨</h1>
  
              <p>To {flight.destination}</p>
            </div>
            <p>{flight.duration}</p>
            <p>{flight.price}</p>
            <button onClick={() => addCartDemo(flight)}>Book Flight</button>
          </div>
          </li>
          )
        })}
      </ul>

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

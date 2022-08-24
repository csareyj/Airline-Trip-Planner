import React from "react";
import { Link } from "react-router-dom";

const Matchup = () => {
  var cart = JSON.parse(localStorage.getItem('project3'));
  console.log("cart: " + cart);

  function cancellation() {
    
    localStorage.setItem('project3', '[]');

  window.location.reload(false);
  console.log("cart after: " + localStorage.getItem('project3'));
  }
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
        {cart.map(flight => {
          return (
            <div className="App-card">
            <h3>FLIGHT {flight.flightNumber}</h3>
            <div className="Card-ori-dest">
              <p>From {flight.departure}</p>
  
              <h1>⇨</h1>
  
              <p>To {flight.destination}</p>
            </div>
            <p>{flight.duration}</p>
            <p>{flight.price}</p>
          </div>
            
          )
        })}

        
      </div>
            <button onClick={() => cancellation()}>Cancel Bookings</button>
    </div>
  );
};

export default Matchup;

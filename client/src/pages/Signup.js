// import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
// import { CREATE_FLIGHTS } from "../utils/mutations";
// import { QUERY_USERS } from "../utils/queries";
// import { QUERY_FLIGHTS } from "../utils/queries";

const Signup = () => {


//   let { id } = useParams();

//   const { data } = useQuery(QUERY_FLIGHTS, {
//     variables: { _id: id },
//   });

//   const flights = data?.flights || [];

//   const [createFlights] = useMutation(CREATE_FLIGHTS);

  // const handleFlights = async (name, flights) => {
  //   try {
  //     await createFlights({
  //       variables: { _id: id, name: Name, destination: destination, duration: duration, departure: departure, price: price, flightNumber: flightNumber},
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  

  return (
    <div className="login">
      <header className="App-header">
        <Link className="App-link" to="/home">
          <h1>Airline Trip Planner</h1>
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
      <div className="k">
        <div className="login-contentbox">
          <form className="signup-form">
            <h2>Sign Up</h2>
            <label htmlFor="signup-email">Full Name: </label>
            <input
              type="text"
              className="signup-name"
              placeholder="First Last"
            ></input>
            <br></br>
            <label htmlFor="signup-email">Email Address: </label>
            <input
              type="text"
              className="signup-email"
              placeholder="Email Address"
            ></input>
            <br></br>
            <label htmlFor="signup-email">Password: </label>
            <input
              type="text"
              className="signup-pass"
              placeholder="Password"
            ></input>
            <br></br>
            <input  type="submit" value="Sign Up"></input>
          </form>
        </div>

      </div>
      <footer className="login-footer">
        <h3>Collaborative effort of David Dwight, Brandon Cheung, Sam Patel, Bossman Quansah, and Curtis Arey</h3>
      </footer>
    </div>
  );
};

export default Signup;

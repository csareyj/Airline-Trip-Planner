import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { CREATE_DEPARTURE } from "../utils/mutations";
import { CREATE_DESTINATION } from "../utils/mutations";
import { CREATE_DURATION } from "../utils/mutations";
import { CREATE_PRICE } from "../utils/mutations";
import { QUERY_MATCHUPS } from "../utils/queries";

const Login = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    variables: { _id: id },
  });

  const matchup = data?.matchups || [];

  const [createDeparture] = useMutation(CREATE_DEPARTURE);
  const [createDestination] = useMutation(CREATE_DESTINATION);
  const [createDuration] = useMutation(CREATE_DURATION);
  const [createPrice] = useMutation(CREATE_PRICE);

  // const handleDeparture = async (name, departure) => {
  //   try {
  //     await createDeparture({
  //       variables: { _id: id, techNum: techNum },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // const handleDestination = async (name, destination) => {
  //   try {
  //     await createDestination({
  //       variables: { _id: id, techNum: techNum },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // const handleDuration = async (name, duration ) => {
  //   try {
  //     await createDuration({
  //       variables: { _id: id, techNum: techNum },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // const handlePrice = async (name, price) => {
  //   try {
  //     await createPrice({
  //       variables: { _id: id, techNum: techNum },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="login">
      <header className="App-header">
        <Link className="App-link" to="/">
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
            <Link className="App-link" to={"/login"}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      </header>
      <div className="k">
        <div className="login-contentbox">
          <form className="login-form">
            <h2>Login</h2>
            <label htmlFor="login-email">Email Address: </label>
            <input
              type="text"
              className="login-email"
              placeholder="Email Address"
            ></input>
            <br></br>
            <label htmlFor="login-email">Password: </label>
            <input
              type="text"
              className="login-pass"
              placeholder="Password"
            ></input>
            <br></br>
            <input  type="submit" value="Login"></input>
          </form>

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

export default Login;

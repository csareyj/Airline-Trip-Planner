import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { CREATE_VOTE } from "../utils/mutations";
import { QUERY_MATCHUPS } from "../utils/queries";

const Login = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    variables: { _id: id },
  });

  const matchup = data?.matchups || [];

  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (techNum) => {
    try {
      await createVote({
        variables: { _id: id, techNum: techNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <header className="App-header">
        <Link className="App-link" to="/">
          <h1>Airline Trip Planner</h1>
        </Link>
        {/* <nav>
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
      </nav> */}
      </header>
      <div className="k">
        <div className="login-contentbox">
          <form className="login-form">
            <h2>Login</h2>
            <label for="login-email">Email Address: </label>
            <input
              type="text"
              className="login-email"
              placeholder="Email Address"
            ></input>
            <br></br>
            <label for="login-email">Password: </label>
            <input
              type="text"
              className="login-pass"
              placeholder="Password"
            ></input>
          </form>

          <form className="signup-form">
            <h2>Sign Up</h2>
            <label for="signup-email">Full Name: </label>
            <input
              type="text"
              className="signup-name"
              placeholder="First Last"
            ></input>
            <br></br>
            <label for="signup-email">Email Address: </label>
            <input
              type="text"
              className="signup-email"
              placeholder="Email Address"
            ></input>
            <br></br>
            <label for="signup-email">Password: </label>
            <input
              type="text"
              className="signup-pass"
              placeholder="Password"
            ></input>
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

// import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import LoginForm from "../components/LoginForm";
import { QUERY_ME } from "../utils/queries";
import { useEffect, useReducer } from "react";
import { useUser } from "../context/UserContext";
import reducer from "../context/reducers";
import { LOGIN, LOGOUT } from "../context/actions";

// import { CREATE_FLIGHTS } from "../utils/mutations";
// import { QUERY_USERS } from "../utils/queries";
// import { QUERY_FLIGHTS } from "../utils/queries";

const Login = () => {
  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(props);
  // const {appState, setAppState} = props;
  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  const me = data?.me || {};

  useEffect(() => {
    if (me && me.hasOwnProperty("_id")) {
      if (state.user === null || me._id !== state.user._id) {
        dispatch({ type: LOGIN, payload: me });
      }
    }
  }); // want to update state on any change

  // let { id } = useParams();

  // const { data } = useQuery(QUERY_FLIGHTS, {
  //   variables: { _id: id },
  // });

  // const flights = data?.flights || [];

  // const [createFlights] = useMutation(CREATE_FLIGHTS);

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
          <h1 className="App-link">✈ WinginGit ✈</h1>
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
              <Link className="App-link" to={"/userForm"}>
                User Form
              </Link>
            </li>
            <li>
              <Link className="App-link" to={"/"}>
                Logout
              </Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <div className="k">
        <div className="login-contentbox">
          {/* <form className="login-form">
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
          </form> */}

          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {me && me.hasOwnProperty("_id") ? (
                <ul className="square">
                  {/*logged in */}
                  <li>{me.name} is logged in</li>
                  <li>email: {me.email}</li>
                </ul>
              ) : (
                <>
                  {/*Not Logged in - need form*/}
                  <LoginForm />
                </>
              )}
            </>
          )}
        </div>
      </div>
      <footer className="login-footer">
        <h3>
          Collaborative effort of David Dwight, Brandon Cheung, Sam Patel,
          Bossman Quansah, and Curtis Arey
        </h3>
      </footer>
    </div>
  );
};

export default Login;

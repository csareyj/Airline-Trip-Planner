import { useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
// import { CREATE_FLIGHTS } from "../utils/mutations";
// // import { QUERY_USERS } from "../utils/queries";
// import { QUERY_FLIGHTS } from "../utils/queries";

const Starter = () => {
  //   const initialState = useUser();
  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   // console.log(props);
  //   // const {appState, setAppState} = props;
  //   const { loading, data } = useQuery(QUERY_ME, {
  //     fetchPolicy: "no-cache"
  //   });

  //   const me = data?.me || {};

  //   useEffect( () => {
  //     if(me && me.hasOwnProperty("_id")){
  //       if(state.user === null || me._id !== state.user._id ){
  //         dispatch({type: LOGIN, payload: me});
  //       }
  //     }
  //   }); // want to update state on any change

  // let { id } = useParams();

  // const { data } = useQuery(QUERY_FLIGHTS, {
  //   variables: { _id: id },
  // });

  // const flights = data?.flights || [];

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
    <div className="starter">
      <header className="App-header">
        <h1 className="App-link">Airline Trip Planner</h1>
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
            <Link className="App-link" to={"/starter"}>
              Logout
            </Link>
          </li>
        </ul>
      </nav> */}
      </header>
      <div className="k">
        <div className="login-contentbox">
          <div className="starter-card">
            <h2 className="App-link">Returning?</h2>
            <Link className="App-link" to={"/login"}>
              login
            </Link>
            <br></br>
            <h2 className="App-link">New?</h2>

            <Link className="App-link" to={"/signup"}>
              signup
            </Link>
          </div>
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

export default Starter;

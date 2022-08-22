import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { QUERY_USERS } from "../utils/queries";
import { QUERY_FLIGHTS } from "../utils/queries";
import { CREATE_FLIGHTS } from "../utils/mutations";

const Home = () => {
  const { data } = useQuery(QUERY_FLIGHTS, {
    fetchPolicy: "no-cache",
  });

  // const matchupList = data?.matchups || [];

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

      <form className="App-search">
        <input type="input" placeholder="From..."></input>
        <h1></h1>
        <input type="input" placeholder="To..."></input>
        <div>
          <button className="App-search-btn">Search</button>
        </div>
      </form>

      <h2>Results:</h2>

      <section className="App-results">
        {/* here we generate the result cards, I'll leave a template card but I don't yet know how to generate them off of the database info */}
        <div className="App-card">
          <h3>FLIGHT 23-J</h3>
          <div className="Card-ori-dest">
            <p>FROM Philadelphia, PA</p>

            <h1></h1>

            <p>TO New York, NY</p>
          </div>
          <p>15 hour flight</p>
          <p>$1200</p>
          <button>Book Flight</button>
        </div>
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

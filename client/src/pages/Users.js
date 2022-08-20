import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const Users = () => {
  const { loading, data } = useQuery(QUERY_USERS, {
    fetchPolicy: "no-cache",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const formValues = { ...formState };
    formValues[name] = value;
    setFormState(formValues);
  };

  const userList = data?.users || [];

  return (
    <div className="card bg-white card-rounded w-50">
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

      <div className="users-contentbox">
        <div className="users-card-header bg-dark text-center">
          <h1>My Profile</h1>
        </div>

        <div className="users-card-body m-5">
          <h2>Here is your Profile Information:</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="square">
              {userList.map((user) => {
                return (
                  <li key={user._id}>
                    <span>{user.name}</span>
                    <br />
                    <span>{user.email}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <form className="users-form">
            <label>Name</label>
            <br></br>
            <input
              type="text"
              name="users-name"
              placeholder="Name of Person"
              onChange={handleInputChange}
              value={formState.name}
            />
            <br></br>
            <label>Email</label>
            <br></br>
            <input
              type="text"
              name="users-email"
              placeholder="Email of Person"
              onChange={handleInputChange}
              value={formState.email}
            />
            <br></br>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="users-password"
              placeholder="Password"
              onChange={handleInputChange}
              value={formState.password}
            />
          </form>
        </div>

        <div className="users-card-footer text-center m-3">
          <h2>Ready to create a new profile?</h2>
          <Link to="/matchup">
            <button className="btn btn-lg btn-danger">Create Profile!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Users;

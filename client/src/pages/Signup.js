import { useParams, Link } from "react-router-dom";
import React, { useState, useReducer } from "react";
import { CREATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { useUser } from "../context/UserContext";
import Auth from "../utils/auth.js";
import { useNavigate } from "react-router-dom";
import reducer from "../context/reducers";

export default function Signup(props) {
  const [createUser] = useMutation(CREATE_USER);
  const initialState = useUser();
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    "name-finished": true,
    "email-finished": true,
    "password-finished": true,
    "name-verified": true,
    "email-verified": true,
    "password-verified": true,
  });

  const verify = (name, data) => {
    if (name === "name") {
      if (data.length < 6) {
        return { [name + "-verified"]: false }; // something is wrong, data is not long enough
      }
    } else if (name === "email") {
      if (!/.+@.+\..+/.test(data)) {
        return { [name + "-verified"]: false }; // something is wrong, regex says it is not an email
      }
    } else if (name === "password") {
      if (!/[a-zA-Z0-9!-]+/i.test(data)) {
        return { [name + "-verified"]: false }; // something is wrong, regex says it is not using the right characters
      }
      if (data.length < 6) {
        return { [name + "-verified"]: false }; // something is wrong, data is not long enough
      }
    }
    return {
      [name + "-verified"]: true,
    };
  };
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const verifyResult = verify(name, value);
    console.log(verifyResult);

    setFormState({
      ...formState,
      ...verifyResult,
      [name]: value,
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    // alert(JSON.stringify(formState));
    let { name, email, password } = formState;
    let tokenUser = await createUser({
      variables: {
        name,
        email,
        password,
      },
    });
    const token = tokenUser.data.createUser.token;
    const user = tokenUser.data.createUser.user;
    console.log(user);
    // formData.login.user
    Auth.login(
      dispatch,
      token,
      {
        login: user,
      },
      navigate
    );
  };

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
          <form className="signup-form" onSubmit={submitHandler}>
            <h2>Sign Up</h2>
            {!formState["name-verified"] ? (
              <>
                <span>Name must be longer than 6 characters</span>
                <br />
              </>
            ) : (
              <></>
            )}
            <label htmlFor="signup-name">Full Name: </label>
            {/* <input
              type="text"
              name="name"
              value={formState.name}
              onchange={onChangeHandler}
              className="signup-name"
              placeholder="First Last"
            ></input> */}
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={onChangeHandler}
          className="signup-name"
          placeholder="First Last"
        />
            <br></br>
            {!formState["email-verified"] ? (
              <>
                <span>Email must look like "name@company.com"</span>
                <br />
              </>
            ) : (
              <></>
            )}
            <label htmlFor="signup-email">Email Address: </label>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={onChangeHandler}
              className="signup-email"
              placeholder="Email Address"
            ></input>
            <br></br>
            {!formState["password-verified"] ? (
              <>
                <span>
                  Password must be longer than 5 characters and use letters,
                  numbers or "!" or "-".
                </span>
                <br />
              </>
            ) : (
              <></>
            )}
            <label htmlFor="signup-email">Password: </label>
            <input
              type="text"
              name="password"
              value={formState.password}
              onChange={onChangeHandler}
              className="signup-pass"
              placeholder="Password"
            ></input>
            <br></br>
            <input type="submit" value="Sign Up"></input>
          </form>
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
}

// export default Signup;

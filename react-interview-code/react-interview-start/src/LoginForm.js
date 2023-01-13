import { useState, useEffect } from 'react'
import { login } from "./utils";
import "./styles.css";

// ================ LOGIN FORM ====================
// 
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setDisabled(email.length === 0 || password.length < 6);
  }, [email, password]);

  const loginHandler = async () => {
    setError(null);
    try {
      await login({email, password});
      alert("Login successful!");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type={"email"}  onChange={ (e) => setEmail(e.target.value)} value={email}/>
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input id={"password"} type={"password"}  onChange={ (e) => setPassword(e.target.value)} value={password}/>
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */
      error &&
      <div className="errorMessage">{
        {error}
      }</div>
      }

      <div className="button">
        <button onClick={loginHandler} disabled={disabled}>Login</button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3000/signup",
          { email, password, password_confirmation: passwordConfirmation },
          { withCredentials: true }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Password Confirmation</label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  };
  export default Signup;
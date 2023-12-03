import React, { useState } from "react";

// styles
import "./style.css";

function Login({ loginHandler, user, setUser }) {
  const [password, setPassword] = useState("");

  return (
    <div className="login-section">
      <div className="login-form-container">
        <div className="login-inputs">
          <div className="note">(Input any random user/password.)</div>
          {/* user input */}
          <label htmlFor="user">Username</label>
          <input
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <div className="error crimson">
            {user && user.trim().length === 0 && "Invalid username"}
          </div>

          {/* password input */}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error crimson">
            {password && password.trim().length === 0 && "Invalid password"}
          </div>
        </div>

        <button
          disabled={!user || !user.trim() || !password || !password.trim()}
          className="btn login-btn"
          onClick={loginHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

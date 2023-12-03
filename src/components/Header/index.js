import React from "react";

// styles
import "./style.css";

function Header({ isLoggedIn, logoutHandler, user }) {
  return (
    <div className="header">
      <div className="main-heading capitalize">management dashboard</div>
      {isLoggedIn && (
        <div className="logout-container">
          <div className="user-name">Logged in as {user}</div>
          <button className="btn logout-btn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;

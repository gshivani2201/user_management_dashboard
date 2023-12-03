import { useState } from "react";

// styles
import "./App.css";

// localStorage
import {
  setLoginStatus,
  getLoginStatus,
  setUsername,
  getUsername,
} from "./utils/localStorage";

// child components
import Header from "./components/Header";
import Login from "./components/Login";
import Table from "./components/Table";

if (getLoginStatus() === undefined || getLoginStatus() === null) {
  setLoginStatus(false);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(getLoginStatus() || false);
  const [user, setUser] = useState(getUsername() || "");

  /**
   * to toggle login status on login/logout
   * to set
   */
  const toggleLogin = () => {
    updateUsername();
    setIsLoggedIn(!isLoggedIn);
    setLoginStatus(!isLoggedIn);
  };

  /**
   * to update user in local state and localStorage
   */
  const updateUsername = () => {
    if (isLoggedIn) {
      setUsername("");
      setUser("");
    } else {
      setUsername(user);
      setUser(user);
    }
  };

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        logoutHandler={() => toggleLogin()}
        user={user}
      />
      {isLoggedIn ? (
        <Table />
      ) : (
        <Login
          loginHandler={() => toggleLogin()}
          user={user}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;

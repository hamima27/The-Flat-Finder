import React from "react";
import { useAuth } from "./contexts/authcontext";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    try {
      await logout();
      history.push("/");
    } catch {
      console.log("Logout Error");
    }
  }

  return (
    <div>
      <p> Dashboard </p>
      <p> Your email address: </p> {currentUser.email}
      <button onClick={handleLogOut}> Log Out </button>
    </div>
  );
}

export default Dashboard;

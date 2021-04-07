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

  const { getCurrentUID } = useAuth();
  const { getCurrentEmail } = useAuth();

  return (
    <div>
      <p> Dashboard </p>
      <p> Your email address: </p> {getCurrentEmail()}
      <p> Current UID: </p> {getCurrentUID()}
      <button onClick={handleLogOut}> Log Out </button>
    </div>
  );
}

export default Dashboard;

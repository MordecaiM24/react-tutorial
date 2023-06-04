import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
      </div>
      <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img
              src={user?.photoURL || ""}
              width="25"
              height="25"
              style={{ borderRadius: "50px" }}
            />
            <button onClick={logOut}> Log Out </button>{" "}
          </>
        )}
      </div>
    </div>
  );
};

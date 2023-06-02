import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link style={{ marginLeft: 8 }} to="/">
        Home
      </Link>
      <Link style={{ marginLeft: 8 }} to="/contact">
        Contact
      </Link>
      <Link style={{ marginLeft: 8 }} to="/login">
        Login
      </Link>
    </div>
  );
};

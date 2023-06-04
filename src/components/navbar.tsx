import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
    </div>
  );
};

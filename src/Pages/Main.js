import { useContext } from "react";
import { AppContext } from "../App";

const Main = () => {
  const { username } = useContext(AppContext);
  return <h1> This is the main page for {username} </h1>
}

export default Main;
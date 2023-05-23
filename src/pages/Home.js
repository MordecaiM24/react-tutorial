import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query"
import Axios from "axios";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const { username } = useContext(AppContext);

  if (isError) {
    return <h1> Sorry, there was an error </h1>
  }

  return (
    <div>
      <h1> This is the home page and the user is {username} </h1>
      <h1> {isLoading ? "Loading ... " : data.fact} </h1>
      <button onClick={refetch}> Update data </button>
    </div>
  );
}
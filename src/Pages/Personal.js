import { NameChanger  } from "../Components/NameChanger";
import { AppContext } from "../App";
import { useContext } from "react";


const Personal = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      <NameChanger/>
      <h1> This is the library for {username} </h1>
    </div>
  );
}

export default Personal;
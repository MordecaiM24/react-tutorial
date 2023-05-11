import { useState } from 'react';
import { AppContext } from "../App";
import { useContext } from "react";


export const NameChanger = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);

  const setName = (event) => {
    setNewUsername(event.target.value);
  }

  const changeName = () => {
    setUsername(newUsername);
  }

  return (
    <div>
      <input 
        placeholder="Name:"
        onChange={setName}
      ></input>

      <button onClick={changeName}>
        Change
      </button>
    </div>
  );

}
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

const Friends = () => {
  const { friends, setFriends } = useContext(AppContext);

  const [newFriend, setNewFriend] = useState("");

  const setFriend = (event) => setNewFriend(event.target.value);

  const addFriend = () => setFriends([...friends, newFriend]);

  const clearFriends = () => setFriends([]);


  return (
    <div>
      <h1> This is a list of your friends: </h1>
      <input onChange={setFriend} placeholder="Add some more!"></input>
      <button onClick={addFriend}> Add </button>

      <div>
        {friends.map((friend) => <p>{friend}</p>)}
      </div>

      <button onClick={clearFriends}> Clear </button>

      
    </div>
  );
}


export default Friends;
import Axios from 'axios';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

const FriendInfo = () => {
  const { friends } = useContext(AppContext);
  const [country, setCountry] = useState("");

  const fetchCountry = (name) => {
    Axios.get(`https://api.agify.io?name=michael`).then((res) => {
      return(res.data.age);
    });
  }

  const test = fetchCountry("Mordecai");

  return (
    <div>
      {/*
      <p>{friends.map((friend) => <p>{friend}</p>)}</p>

      <button onClick={() => fetchCountry(friends[0])}> Try Me! </button>

      <p>{console.log(country)}</p>
      */}
      <p>{test}</p>
      {console.log(test)}
    </div>
  );
}

export default FriendInfo
import Axios from 'axios';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

const FriendInfo = () => {
  const { friends } = useContext(AppContext);
  const [country, setCountry] = useState("");

  const fetchCountry = async (name) => {
    Axios.get(`https://api.agify.io`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      params: {name: name}
    }).then((res) => {console.log(res.data);});
  }

  const test = fetchCountry("Mordecai");
  
  console.log(test);

  return (
    <div>
      <p>{test}</p>
    </div>
  );
}

export default FriendInfo
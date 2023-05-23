import Axios from 'axios';
import { useContext} from 'react';
import { AppContext } from '../App';
import { useQuery } from "@tanstack/react-query"

const FriendInfo = () => {
  const { friends } = useContext(AppContext);

  {/*const fetchCountry = (name) => {
    Axios.get(`https://api.agify.io`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      params: {name: name}
    }).then((res) => {console.log(res.data);});
  }*/}

  const { info } = useQuery(["country"], () => {
    return Axios.get(`https:/api.agify.io/name=Mordecai`).then((res) => res.data);
  })


  return (
    <div>
      <p>{info.age == undefined ? "loading" : info.age}</p>
    </div>
  );
}

export default FriendInfo
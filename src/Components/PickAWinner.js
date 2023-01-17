import axios from 'axios';
import {useState, useEffect} from 'react';
import {apiURL} from '../Utils/apiURL';
import {useParams} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function PickAWinner({raffles}) {
  const API = apiURL ();
  const {id} = useParams;

  const [winner, setWinner] = useState ([]);
  const[raffleTokens, setRaffleTokens] = useState([])
  const [searchToken, setSearchToken] = useState('');
  const [partcipantId, setParticipantId] = useState([])

  useEffect (
    () => {
      const pickAWinner = async () => {
        let res = await axios.get (`${API}/raffles/${id}/winner`);
        // const arrayToObject = res.data.reduce((obj, item)=> {
        //     obj = item;
        //     return obj
        // },{})
        setWinner (res.data);
        const raffleId = winner.map(win => {
            console.log(win)
            return win.raffle_id
        })
        setParticipantId(raffleId)
        const tokens = raffles.map(raffle => {
            console.log(raffle)
            console.log(id)
            if(raffle.id === id){
                return raffle.secret_token
            }
        })
        setRaffleTokens(tokens)


    
      };

      pickAWinner ();
    },
    [id]
  );


console.log(partcipantId)
  console.log(raffleTokens)
  console.log (winner);
  return (
    <div>
      Pick a Winner
      <NavBar />
      <input
        className="search"
        type="text"
        placeholder="Secret Token"
        onChange={e => {
          setSearchToken (e.target.value);
        }}
      />


    </div>
  );
}

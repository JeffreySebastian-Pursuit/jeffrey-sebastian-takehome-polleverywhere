import axios from 'axios';
import {useState, useEffect} from 'react';
import {apiURL} from '../Utils/apiURL';
import {useParams} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import EmptyList from './Empty';
import '../Styles/PickAWinner.scss'

export default function PickAWinner () {
  const API = apiURL ();
  const {id} = useParams;

  const [winner, setWinner] = useState ([]);
  const [filteredRaffleTokens, setFilteredRaffleTokens] = useState ([]);
  const [searchToken, setSearchToken] = useState ('');

  useEffect (
    () => {
      const pickAWinner = async () => {
        let res = await axios.get (`${API}/raffles/${id}/winner`);
        setWinner (res.data);
      };

      pickAWinner ();
    },
    [id]
  );

  useEffect (
    () => {
      if (searchToken) {
        let w = winner.filter (el => {
          let token = el.token;
          console.log ('token', token);
          if (searchToken === token) return searchToken;
        });
        setFilteredRaffleTokens (w);
      } else {
        setFilteredRaffleTokens ([]);
      }
    },
    [searchToken]
  );

  return (
    <div className="Winner-Container">
      <NavBar />
      <div className="Winner-Container__Title">
        Pick a Winner
      </div>
      <input
        className="search"
        value={searchToken}
        type="text"
        placeholder="Secret Token"
        onChange={e => {
          setSearchToken (e.target.value);
        }}
      />

      {filteredRaffleTokens.map (participant => {
        return (
          <div className="Winner-Container__Card">
            <div className="Winner-Container__Title"> We Have a Winner!</div>

            <div className="Winner-Container__Name">
              Name: {participant.firstname} {participant.lastname}{' '}
            </div>
            <div className="Winner-Container__Email">
              Email: {participant.email}
            </div>
            <div className="Winner-Container__Id">
              Winning ID: {participant.id}
            </div>
            <div className="Winner-Container__Phonenumber">
              Phone Number: {participant.phonenumber}
            </div>
          </div>
        );
      })}

      {searchToken && filteredRaffleTokens.length === 0 && <EmptyList />}
    </div>
  );
}

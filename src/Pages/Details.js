import React from 'react';
import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import {apiURL} from '../Utils/apiURL';
import NavBar from '../NavBar/NavBar';

import RaffleDetails from '../Components/RaffleDetails';
// import NavBar from '../NavBar/NavBar'

export default function Details () {
  const [raffleDetails, setRaffleDetails] = useState ([]);
  const {id} = useParams ();

  const API = apiURL ();
  // const navigate = useNavigate();

  useEffect (
    () => {
      const fetchRaffle = async () => {
        try {
          let res = await axios.get (`${API}/raffles/${id}`);
          setRaffleDetails (res.data);
        } catch (error) {
          return error;
        }
      };
      fetchRaffle ();
    },
    [id]
  );

  console.log (raffleDetails);
  return (
    <div>

      <RaffleDetails raffleDetails={raffleDetails} />
    </div>
  );
}

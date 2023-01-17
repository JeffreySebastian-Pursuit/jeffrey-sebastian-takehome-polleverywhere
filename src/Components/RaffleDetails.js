import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {apiURL} from '../Utils/apiURL';
import NavBar from '../NavBar/NavBar';
import '../Styles/RaffleDetails.scss';

export default function RaffleDetails() {
  const [raffleDetails, setRaffleDetails] = useState ([]);
  const {id} = useParams ();

  const API = apiURL ();

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

  return (
    <div className='RaffleDetails'>
      <NavBar id={id} raffleName={raffleDetails.name} />

    </div>
  );
}

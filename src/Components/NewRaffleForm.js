import React from 'react';
import {apiURL} from '../Utils/apiURL';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../Styles/NewRaffleForm.scss';

export default function NewRaffleForm () {
  const API = apiURL ();

  const createdDate = new Date ();

  const [newRaffle, setNewRaffle] = useState ({
    name: '',
    secret_token: '',
    created: createdDate,
    raffled: '',
  });

  let navigate = useNavigate ();

  const createNewRaffle = async newRoom => {
    try {
      await axios.post (`${API}/raffles`, newRoom);
      alert ('You just created a new raffle!');
    } catch (error) {
      return error;
    }
  };

  const handleChange = e => {
    setNewRaffle ({...newRaffle, [e.target.id]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    createNewRaffle (newRaffle);
    navigate ('/');
  };
  return (
    <div className="side-by">

      <form onSubmit={handleSubmit} className="newForm">
        <div class="segment">
          <h1>New Raffle</h1>
        </div>

        <label htmlFor="name">

          <input
            type="text"
            value={newRaffle.name}
            id="name"
            onChange={handleChange}
            placeholder="Raffle Name"
            required
          />
        </label>

        <label htmlFor="secret_token">

          <input
            type="text"
            value={newRaffle.secret_token}
            id="secret_token"
            onChange={handleChange}
            placeholder="Secret Token"
            required
          />
        </label>

        <div>
          <button type="submit" className="unit">
            Create New Raffle
          </button>
        </div>
      </form>
      <br />

    </div>
  );
}

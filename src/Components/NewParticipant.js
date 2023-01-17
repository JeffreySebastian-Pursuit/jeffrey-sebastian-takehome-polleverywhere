import {useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {apiURL} from '../Utils/apiURL';
import NavBar from '../NavBar/NavBar';

export default function NewParticipant () {
  const API = apiURL ();
  const {id} = useParams ();
  const navigate = useNavigate ();

  var rand = function () {
    return Math.random ().toString (36).substr (2); // remove `0.`
  };

  var token = function () {
    return rand () + rand (); // to make it longer
  };
  const [newParticipant, setNewParticipant] = useState ({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    token: token (),
    raffles_id: id,
  });

  const addNewParticipant = async newParticipant => {
    try {
      await axios.post (`${API}/raffles/${id}/participants`, newParticipant);
      navigate (`/raffles/${id}/participants`);
    } catch (error) {}
  };

  const handleChange = e => {
    setNewParticipant ({...newParticipant, [e.target.id]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault ();
    addNewParticipant (newParticipant);
  };

  return (
    <div>
      <NavBar id={id} />
      <form onSubmit={handleSubmit} className="newForm">
        <div class="segment">
          <h1>Register</h1>
        </div>

        <label htmlFor="first_name">
          <input
            type="text"
            value={newParticipant.first_name}
            id="first_name"
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </label>
        <label htmlFor="last_name">

          <input
            type="text"
            value={newParticipant.last_name}
            id="last_name"
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </label>

        <label htmlFor="email">

          <input
            type="email"
            value={newParticipant.email}
            id="email"
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </label>

        <label htmlFor="phone_number">

          <input
            type="tel"
            value={newParticipant.phone_number}
            id="phone_number"
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </label>

        <div>
          <button type="submit" className="unit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

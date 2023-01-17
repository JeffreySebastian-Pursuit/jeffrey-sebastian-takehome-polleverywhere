import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import {apiURL} from './Utils/apiURL';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ParticipantList from './Components/ParticipantList';
import NewParticipant from './Components/NewParticipant';
import PickAWinner from './Components/PickAWinner';

function App () {
  const API = apiURL ();

  const [raffles, setRaffles] = useState ([]);

  useEffect (() => {
    const fetchAllRaffles = async () => {
      let res = await axios.get (`${API}/raffles`);
      setRaffles (res.data);
    };
    fetchAllRaffles ();
  }, []);





  return (
    <div className="App">

      <Router>
        <main>
          <Routes>
            <Route exact path="/" element={<Home raffles={raffles} />} />
            <Route
              exact
              path="/raffles/:id"
              element={<Details raffles={raffles} />}
            />
            <Route
              exact
              path="/raffles/:id/participants"
              element={<ParticipantList raffles={raffles} />}
            />
            <Route
              exact
              path="/raffles/:id/participants/new"
              element={<NewParticipant raffles={raffles} />}
            />
              <Route
              exact
              path="/raffles/:id/participants/winner"
              element={<PickAWinner raffles={raffles}/>}
            />
            <Route exact path="*" element={<p>Path not resolved</p>} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

import {NavLink} from 'react-router-dom';
import '../Styles/NavBar.scss'
export default function NavBar({id, participants, raffleName}) {

    
  return (
    <div>
        <h1>
        {raffleName}
        </h1>
      <nav>
        <NavLink to="/">
          All Raffles
        </NavLink>
        <NavLink to={`/raffles/${id}/participants`} >
          Participants
        </NavLink>
        <NavLink to={`/raffles/${id}/participants/new`}>
          Register
        </NavLink>
        <NavLink to={`/raffles/${id}/participants/winner`}>
          Pick a Winner
        </NavLink>
      </nav>
    </div>
  );
}

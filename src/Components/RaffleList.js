import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import '../Styles/RaffleList.scss';

export default function RaffleList({raffles}) {
  return (
    <div className="RaffleContainer">
      <div className="RaffleContainer__Title">
        All Raffles:
      </div>
      {raffles.map (raffle => {
        const {name, created, raffled, id} = raffle;
        return (
          <div className="RaffleContainer__Card">

            <Link to={`/raffles/${id}`}>
              <div className="RaffleContainer__Name">{name}</div>
              <div className='RaffleContainer__Created'>Created: {moment (created).format ('LLLL')}</div>
              <div className='RaffleContainer__Raffled'>Raffled On: {moment (raffled).format ('LLLL')}</div>
            </Link>

          </div>
        );
      })}
    </div>
  );
}

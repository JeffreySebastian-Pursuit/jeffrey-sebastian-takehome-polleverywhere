import React from 'react'
import RaffleList from './RaffleList.js'
import NewRaffleForm from './NewRaffleForm';
import "../Styles/Raffles.css"

export default function Raffles({raffles}) {

  return (

    <div className='raflleList'>

     
       <h1>
       Raffle App
        </h1> 
      <div>

    <NewRaffleForm/>
    <RaffleList raffles={raffles}/>

      </div>
    </div>
  )
}

/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {apiURL} from '../Utils/apiURL';
import {useParams} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import '../Styles/ParticipantList.scss'
import PickAWinner from './PickAWinner';

export default function ParticipantList () {
  const API = apiURL ();
  const [partcipants, setParticipants] = useState ([]);
  const [searchParticipant, setSearchPaticipant] = useState('')
  const {id} = useParams ();

  useEffect (
    () => {
      const fetchAllParticipant = async () => {
        try {
          let res = await axios.get (`${API}/raffles/${id}/participants`);
          setParticipants (res.data);
        } catch (error) {
          return error;
        }
      };
      fetchAllParticipant ();
    },
    [id]
  );
  console.log ('partcipants', partcipants);
  return (

    <div className='Participant-Container'>

      <NavBar id={id} partcipant={partcipants}/>
<div className='Participant-Container__Title'>
      Participant List

</div>
      {/* <PickAWinner partcipant={partcipants}/> */}
      <br/>
      <br/>
      <input 
      className='search'
      type='text'
      placeholder = 'search participant'
      onChange= {e=> {
                    setSearchPaticipant(e.target.value)
      }}/>


      {partcipants.filter(participant => {
        const fullName = `${participant?.irstname} ${participant?.lastname}`;
            if(searchParticipant ===''){
                return participant
            }else if(
                fullName.toLowerCase().includes(searchParticipant) || participant?.email.toLowerCase().includes(searchParticipant)
            ){
                return searchParticipant
            }
      })
      
      
      
      .map (partcipant => {
        const {firstname, lastname, email, phonenumber, winner} = partcipant;
        return (
          <div className='Participant-Container__Card'>
            <div className='Participant-Container__Name'> Name: {firstname} {lastname} </div>
            <div className='Participant-Container__Email'> Email: {email} </div>
            <div className='Participant-Container__Phonenumber'> Phone Number: {phonenumber} </div>
          </div>
        );
      })}

    </div>
  );
}

const express = require("express");
const raffles = express.Router();


const {getAllRaffles, createNewRaffle, getOneRaffle, getOneParticipant, addNewParticipants, getAllWinners, pickOneWinner} = require('../queries/raffles');

raffles.get("/", async (req, res) => {
    const raffles = await getAllRaffles();
    res.json(raffles);
  });


  raffles.get('/:id', async (req, res) =>{
      const raffleId = req.params.id
      console.log(raffleId)
      try {
        if(!/[0-9]/.test(raffleId)){
            res.status(422).json({ success: false, error: true, message: "Raffle Id must be a number" })
        }
            const raffle = await getOneRaffle(raffleId)

    console.log(raffle)
        if(raffle){
            res.json(raffle)
        }else{
            res.status(422).json({ success: false, error: true, message: "Raffle does not exist" })
        }
    } catch (error) {
        res.status(422).json({ success: false, error: true, message: "An error occur" })
    }
  })

  raffles.get('/:id/participants', async (req, res) => {
    const raffleParticipant = await getOneParticipant(req.params.id);
    console.log(raffleParticipant)
    if(raffleParticipant){
        res.json(raffleParticipant)
    }else{
        res.status(404).json({ success: false, error: true, message: "invalid" });
    }
  })

  raffles.get('/:id/winner', async (req, res) => {
    const raffleParticipant = await pickOneWinner(req.params.id);
    console.log(raffleParticipant)
    if(raffleParticipant){
        res.json(raffleParticipant)
    }else{
        res.status(404).json({ success: false, error: true, message: "invalid" });
    }
  })

  raffles.post("/", async (req, res) => {
    const newRaffle = req.body
    const raffles = await createNewRaffle(newRaffle);
    res.json(raffles);
  });

  raffles.post('/:id/participants', async (req, res) => {
   const newParticipant = req.body;
   const result = await addNewParticipants(newParticipant)
   res.json(result)
  })


 

module.exports = raffles;
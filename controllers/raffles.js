const express = require("express");
const raffles = express.Router();


const {getAllRaffles, createNewRaffle, getOneRaffle} = require('../queries/raffles');

raffles.get("/", async (req, res) => {
    const raffles = await getAllRaffles();
    res.json(raffles);
  });


  raffles.get('/:id', async (req, res) =>{
    const raffleId = req.params.id
    const raffle = await getOneRaffle(raffleId)
    try {
        if(raffle){
            res.json(raffle)
        }else if(!/[0-9]/.test(raffleId)){
            res.send('Raffle id must be a number')
        }else{
            res.status(422).json({ success: false, error: true, message: "Raffle does not exist" })
        }
    } catch (error) {
        res.status(422).json({ success: false, error: true, message: "An error occur" })
    }
  })

  raffles.post("/", async (req, res) => {
    const newRaffle = req.body
    const raffles = await createNewRaffle(newRaffle);
    res.json(raffles);
  });

module.exports = raffles;
const db = require('../db/dbConfig.js');

const getAllRaffles = async () => {
    return await db.any("select * from raffles")

}

const getOneRaffle = async(id) => {
    return await db.oneOrNone('select * from raffles where id=$1', id)
}

const createNewRaffle= async(newRaffle)=> {
    const {name, secret_token, created, raffled} = newRaffle;
    return await db.one(
        "INSERT INTO raffles(name,secret_token,created, raffled) VALUES($1, $2, $3, $4) RETURNING *",
        [name,secret_token,created, raffled]
    )
    
}

const getOneParticipant = async(id) => {
    return await db.any("select participants.id as id, participants.first_name as firstName, participants.last_name as lastName, participants.email as email, participants.phone_number as phoneNumber, participants.winner as winner, participants.token as token, raffles.id as raffle_id from participants join raffles on participants.raffles_id = raffles.id where raffles.id = $1", id)
}

const addNewParticipants = async(newParticipant) => {
    const {first_name ,last_name, email, phone_number, token, raffles_id} = newParticipant;

    return await db.one(
    "INSERT INTO participants(first_name ,last_name, email, phone_number, token, raffles_id) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *", 
    [first_name ,last_name, email, phone_number, token, raffles_id]
    )
   
}

const pickOneWinner = async(id) => {
    return await db.any("select participants.id as id, participants.first_name as firstName, participants.last_name as lastName, participants.email as email, participants.phone_number as phoneNumber, participants.winner as winner, participants.token as token, raffles.id as raffle_id from participants join raffles on participants.raffles_id = raffles.id where winner = false", id)
    
}




module.exports = {
    getAllRaffles,
    createNewRaffle,
    getOneRaffle,
    getOneParticipant,
    addNewParticipants,
    pickOneWinner
}
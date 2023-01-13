const db = require('../db/dbConfig.js');



// Method GET
// /api/raffles
const getAllRaffles = async () => {
    return await db.any("select * from raffles")

}


const getOneRaffle = async(id) => {
    return await db.oneOrNone('select * from raffles where id=$1', id)
}


// post
// /api/raffles
// INSERT INTO raffles(name,secret_token,created, raffled) VALUES($1, $2, $3, $4) Returning *'

const createNewRaffle= async(newRaffle)=> {
    const {name,secret_token,created, raffled} = newRaffle;
    return await db.one(
        "INSERT INTO raffles(name,secret_token,created, raffled) VALUES($1, $2, $3, $4) RETURNING *",
        [name,secret_token,created, raffled]
    )
    
}










// Method get
// /api/raffles/:id/participants
// select participants.id as id,  participants.first_name as name,  participants.last_name, raffles.id from raffles join participants on  participants.raffles_id = raffles.id;


module.exports = {
    getAllRaffles,
    createNewRaffle,
    getOneRaffle
}
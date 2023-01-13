const db = require('../db/dbConfig.js');

const getAllUsers = async () => {
    return await db.any("select * from users")

}


module.exports = {
    getAllUsers

}

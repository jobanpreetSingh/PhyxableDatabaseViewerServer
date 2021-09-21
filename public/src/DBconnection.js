const mongoose = require('mongoose');
const DB = process.env.DATABASE
// in file->
//  DataBase Connection
mongoose.connect(DB).then((res) => {
    if (res) {
        console.log("Connection Successfully")

    }
    else {
        throw new Error('no database connection')
    }
}).catch((e) => console.log("could not connect to the Database", e))
//connect to databas ein mongodb
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/card_db").then(()=>console.log("connected Successfully!")).catch((err)=>console.error(err));

module.exports=db;
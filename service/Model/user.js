const express = require('express');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{type:string, require: true},
    point:{type:numberAttribute},
});

const User=mongoose.model("User", userSchema);
module.exports=User;
const mongoose = require("mongoose")    


mongoose.connect("mongodb+srv://Kessy1:@cluster0.oesudyc.mongodb.net/reprograma")

let db = mongoose.connection;

module.exports = db;
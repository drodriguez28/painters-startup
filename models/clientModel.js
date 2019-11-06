const mongoose = require('./connection.js')


const ClientSchema = new mongoose.Schema({
    name: String,
    typeofjob: String,
    city: String,
    state: String,
    email: String
  })

const ClientCollection = mongoose.model('Client',ClientSchema)



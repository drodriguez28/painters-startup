const mongoose = require('./connection.js')


const ClientSchema = new mongoose.Schema({
    name: String,
    typeofjob: String,
    city: String,
    state: String,
    email: String
})

const ClientCollection = mongoose.model('Client', ClientSchema)

// get all 
const getAllClients = () => {
    return ClientCollection.find({})
}


//get one
const getSingleClient = (id) => {
    return ClientCollection.findById(id)
}


// create
const createClient = (clientData) => {
    return ClientCollection.create(clientData)
}

//delete
const deleteClient = (id) => {
    return ClientCollection.deleteOne({ _id: id })
}


module.exports ={
    getAllClients,
    getSingleClient,
    createClient,
    deleteClient
}
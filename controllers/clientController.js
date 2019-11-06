const express = require('express')


const clientApi = require('../models/clientModel.js')



const clientRouter = express.Router()




//get all 

clientRouter.get('/', (req, res) => {
    clientApi.getAllClients()
        .then((allClients) => {
            console.log(allClients)
            res.json(allClients)

        })
})


// get one
clientRouter.get('/:id', (req, res) => {
    clientApi.getSingleClient(req.params.id)
      .then((singleClient) => {
        res.json(singleClient)
      })
  })



// create client 
clientRouter.post('/', (req, res) => {
    clientApi.createClient(req.body)
        .then((createdClient) => {
            res.json(createdClient)
        })
})




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
  
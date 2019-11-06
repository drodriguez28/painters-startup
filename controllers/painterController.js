
const express = require('express')


const painterApi = require('../models/painterModel.js')


const painterRouter = express.Router()

//get all 

painterRouter.get('/', (req, res) => {
  painterApi.getAllPainters()
    .then((allPainters) => {
      console.log(allPainters)
      res.json(allPainters)

    })
})


// get one
painterRouter.get('/:id', (req, res) => {
  painterApi.getSinglePainter(req.params.id)
    .then((singlePainter) => {
      res.json(singlePainter)
    })
})


// create painter 
painterRouter.post('/', (req, res) => {
  painterApi.createPainter(req.body)
    .then((createdPainter) => {
      res.json(createdPainter)
    })
})


// update painter
painterRouter.put('/:id', (req, res) => {
  painterApi.updatePainter(req.params.id, req.body)
    .then((updatedPainter) => {
      res.json(updatedPainter)
    })
})



//delete painter
painterRouter.delete('/:id', (req, res) => {
  painterApi.deletePainter(req.params.id)
    .then((deletedPainter) => {
      res.json(deletedPainter)
    })
})


module.exports = {
  painterRouter
}















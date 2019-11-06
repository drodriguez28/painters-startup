
const express = require('express')


const painterApi = require('../models/template.js')


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


















module.exports = {
  painterRouter
}

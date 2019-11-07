const express = require('express')



const typeApi = require('../models/typeModel.js')


const typeRouter = express.Router()



//get all 

typeRouter.get('/', (req, res) => {
    typeApi.getAllTypes()
      .then((allTypes) => {
        console.log(allTypes)
        res.json(allTypes)
  
      })
  })


// get one
typeRouter.get('/:id', (req, res) => {
    typeApi.getSingleType(req.params.id)
      .then((singleType) => {
        res.json(singleType)
      })
  })


// create type 
typeRouter.post('/', (req, res) => {
    typeApi.createType(req.body)
      .then((createdType) => {
        res.json(createdType)
      })
  })

  
//delete type
typeRouter.delete('/:id', (req, res) => {
    typeApi.deleteType(req.params.id)
      .then((deletedType) => {
        res.json(deletedType)
      })
  })
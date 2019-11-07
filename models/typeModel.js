const mongoose = require('./connection.js')


const TypeSchema = new mongoose.Schema({
    name: String,
    description: String,
    stores: String
})

const TypeCollection = mongoose.model('Type', TypeSchema)

// get all 
const getAllTypes = () => {
    return TypeCollection.find({})
}


//get one
const getSingleType = (id) => {
    return TypeCollection.findById(id)
}


// create
const createType = (typeData) => {
    return TypeCollection.create(typeData)
  }



//delete
const deleteType = (id) => {
    return TypeCollection.deleteOne({ _id: id })
  }


module.exports ={
    getAllTypes,
    getSingleType,
    createType,
    deleteType
}
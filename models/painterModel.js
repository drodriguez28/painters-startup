const mongoose = require('./connection.js')


const PainterSchema = new mongoose.Schema({
  name: String,
  city: String,
  age: Number,
  email: String
})


const PainterCollection = mongoose.model('Painter', PainterSchema)

// get all 
const getAllPainters = () => {
  return PainterCollection.find({})
}

//get one
const getSinglePainter = (id) => {
  return PainterCollection.findById(id)
}

// create
const createPainter = (painterData) => {
  return PainterCollection.create(painterData)
}

// updates
const updatePainter = (id, painterData) => {
  return PainterCollection.updateOne({ _id: id }, painterData)

}

//delete
const deletePainter = (id) => {
  return PainterCollection.deleteOne({ _id: id })
}







module.exports = {
  getAllPainters,
  getSinglePainter,
  createPainter,
  updatePainter,
  deletePainter
}

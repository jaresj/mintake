const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)

// My patient information schema, copying the above
const PatientInfoSchema = new mongoose.Schema({
  patientFirstName: {
    type: String,

  }
})
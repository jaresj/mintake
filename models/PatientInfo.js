const mongoose = require('mongoose')

// Keeping this template from the original code for the next couple days while I adjust Schema
// const TodoSchema = new mongoose.Schema({
//   todo: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true
//   }
// })

module.exports = mongoose.model('PatientInfo', PatientInfoSchema)
module.exports = mongoose.model('PatientMedInfo', PatientMedInfoSchema)


// My patient information schema, copying the above
const PatientInfoSchema = new mongoose.Schema({
  givenName: {
    type: String,
    required: true,
  },
  familyName:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },
  state:{
    type: String,
    required: true,
  },
  zipCode:{
    type: String,
    required: true,
  },
  phoneNumber:{
    type: String,
    required: true,
  },
  emailAddress:{
    type: String,
    required: true,
  },
  occupation:{
    type: String,
    required: true,
  },
  emergencyContact:{
    type: String,
    required: true,
  },
  emergencyContactPhone:{
    type: String,
    required: true,
  },
  emergencyContactRelationship:{
    type: String,
    required: true,
  },
  physician:{
    type: String,
    required: true,
  },
  physicianPhone:{
    type: String,
    required: true,
  },
});

  // Considering keeping patient info seperate due to HIPPA concerns
const PatientMedInfoSchema = new mongoose.Schema({
  medicalConditions:{
    type: String,
    required: false,
  },
  currentMedications:{
    type: String,
    required: false,
  },
  headaches:{
    type: Boolean,
    required: false,
  },
  majorAccident:{
    type: Boolean,
    required: false,
  },
  allergies:{
    type: Boolean,
    required: false,
  },
  varicoseVeins:{
    type: Boolean,
    required: false,
  },
  arthritisTendonitis:{
    type: Boolean,
    required: false,
  },
  headaches:{
    type: Boolean,
    required: false,
  },
  bloodClots:{
    type: Boolean,
    required: false,
  },
  cancer:{
    type: Boolean,
    required: false,
  },
  neckBackInjuries:{
    type: Boolean,
    required: false,
  },
  tmj:{
    type: Boolean,
    required: false,
  }, 
  diabetes:{
    type: Boolean,
    required: false,
  },
  abnormalSkinConditions:{
    type: Boolean,
    required: false,
  },
  fibromyalgiaj:{
    type: Boolean,
    required: false,
  },
  heartCirculationProblems:{
    type: Boolean,
    required: false,
  },
  numbness:{
    type: Boolean,
    required: false,
  },
  jointSurgery:{
    type: Boolean,
    required: false,
  },
  sprainsStrains:{
    type: Boolean,
    required: false,
  },
  highLowBloodPressure:{
    type: Boolean,
    required: false,
  },
  recentInjuries:{
    type: Boolean,
    required: false,
  },
  additionalSymptomInfo:{
    type: String,
    required: false,
  },
  digitalSignature:{
    type: String,
    required: true,
  },
  dateOfSubmission:{
    type: Date,
    required: true,
  },
});
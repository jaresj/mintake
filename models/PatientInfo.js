const mongoose = require('mongoose')

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

module.exports = mongoose.model('PatientInfo', PatientInfoSchema)

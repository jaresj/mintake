const mongoose = require('mongoose');

const PatientInfoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    givenName: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    emergencyContactPhone: {
      type: String,
      required: true,
    },
    emergencyContactRelationship: {
      type: String,
      required: true,
    },
    physician: {
      type: String,
      required: true,
    },
    physicianPhone: {
      type: String,
      required: true,
    },
    medicalConditions: {
      type: String,
      required: false,
    },
    currentMedications: {
      type: String,
      required: false,
    },
    headaches: {
      type: Boolean,
      required: false,
      default: false,
    },
    majorAccident: {
      type: Boolean,
      required: false,
      default: false,
    },
    allergies: {
      type: Boolean,
      required: false,
      default: false,
    },
    varicoseVeins: {
      type: Boolean,
      required: false,
      default: false,
    },
    arthritisTendonitis: {
      type: Boolean,
      required: false,
      default: false,
    },
    bloodClots: {
      type: Boolean,
      required: false,
      default: false,
    },
    cancer: {
      type: Boolean,
      required: false,
      default: false,
    },
    neckBackInjuries: {
      type: Boolean,
      required: false,
      default: false,
    },
    tmj: {
      type: Boolean,
      required: false,
      default: false,
    },
    diabetes: {
      type: Boolean,
      required: false,
      default: false,
    },
    abnormalSkinConditions: {
      type: Boolean,
      required: false,
      default: false,
    },
    fibromyalgia: {
      type: Boolean,
      required: false,
      default: false,
    },
    heartCirculationProblems: {
      type: Boolean,
      required: false,
      default: false,
    },
    numbness: {
      type: Boolean,
      required: false,
      default: false,
    },
    jointSurgery: {
      type: Boolean,
      required: false,
      default: false,
    },
    sprainsStrains: {
      type: Boolean,
      required: false,
      default: false,
    },
    highLowBloodPressure: {
      type: Boolean,
      required: false,
      default: false,
    },
    recentInjuries: {
      type: Boolean,
      required: false,
      default: false,
    },
    additionalSymptomInfo: {
      type: String,
      required: false,
    },
    digitalSignature: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('PatientInfo', PatientInfoSchema);

// const PatientInfo = require('../models/PatientInfo');
// const Intake = require('../models/PatientInfo');
const PatientInfo = require('/app/models/PatientInfo');
const Intake = require('/app/models/PatientInfo');

const requestBodyToDocument = (request) => {
  // Assigning textarea values to variable, otherwise they don't go to db
  const userHealthConditions = request.body.userHealthConditions;
  const userMedications = request.body.userMedications;
  const conditionDetails = request.body.conditionDetails;

  return {
    userId: request.user._id,
    givenName: request.body.givenName,
    familyName: request.body.familyName,
    address: request.body.streetAddress,
    city: request.body.userCity,
    state: request.body.userState,
    zipCode: request.body.userZip,
    phoneNumber: request.body.userPhone,
    emailAddress: request.body.userEmail,
    occupation: request.body.userOccupation,
    emergencyContact: request.body.userContact,
    emergencyContactPhone: request.body.userContactPhone,
    emergencyContactRelationship: request.body.userContactPhone,
    physician: request.body.userPhysician,
    physicianPhone: request.body.userPhysicianPhone,
    medicalConditions: userHealthConditions || null,
    currentMedications: userMedications || null,
    headaches: request.body.headaches || false,
    majorAccident: request.body.accident || false,
    allergies: request.body.allergies || false,
    varicoseVeins: request.body.varicoseVeins || false,
    arthritisTendonitis: request.body.arthritis || false,
    bloodClots: request.body.bloodClots || false,
    cancer: request.body.cancer || false,
    neckBackInjuries: request.body.backInjury || false,
    tmj: request.body.tmj || false,
    diabetes: request.body.diabetes || false,
    abnormalSkinConditions: request.body.skinConditions || false,
    fibromyalgia: request.body.fibromyalgia || false,
    heartCirculationProblems: request.body.heartCondition || false,
    numbness: request.body.numbness || false,
    jointSurgery: request.body.jointSurgery || false,
    sprainsStrains: request.body.sprains || false,
    highLowBloodPressure: request.body.bloodPressure || false,
    recentInjuries: request.body.recentInjuries || false,
    additionalSymptomInfo: conditionDetails || null,
    digitalSignature: request.body.userSignature || false,
  };
};

module.exports = {
  getSubmission: async (req, res) => {
    try {
      //PatientInfo.js needs to be changed to capitalized
      const formEntries = await PatientInfo.find({ userId: req.user._id });
      console.log(formEntries);
      if (formEntries.length === 0) {
        res.render('intake.ejs');
      } else {
        res.render('intake.ejs', {
          // Could probably write a function to dynamically build the object in refactoring.  I'm sure my code here could be made dry.
          givenName: formEntries[0].givenName,
          familyName: formEntries[0].familyName,
          address: formEntries[0].address,
          city: formEntries[0].city,
          state: formEntries[0].state,
          zipCode: formEntries[0].zipCode,
          phoneNumber: formEntries[0].phoneNumber,
          emailAddress: formEntries[0].emailAddress,
          occupation: formEntries[0].occupation,
          emergencyContact: formEntries[0].emergencyContact,
          emergencyContactPhone: formEntries[0].emergencyContactPhone,
          emergencyContactRelationship: formEntries[0].emergencyContactRelationship,
          physician: formEntries[0].physician,
          physicianPhone: formEntries[0].physicianPhone,
          medicalConditions: formEntries[0].medicalConditions,
          currentMedications: formEntries[0].currentMedications,
          headaches: formEntries[0].headaches,
          majorAccident: formEntries[0].majorAccident,
          allergies: formEntries[0].allergies,
          varicoseVeins: formEntries[0].varicoseVeins,
          arthritisTendonitis: formEntries[0].arthritisTendonitis,
          bloodClots: formEntries[0].bloodClots,
          cancer: formEntries[0].cancer,
          neckBackInjuries: formEntries[0].neckBackInjuries,
          tmj: formEntries[0].tmj,
          diabetes: formEntries[0].diabetes,
          abnormalSkinConditions: formEntries[0].abnormalSkinConditions,
          fibromyalgia: formEntries[0].fibromyalgia,
          heartCirculationProblems: formEntries[0].heartCirculationProblems,
          numbness: formEntries[0].numbness,
          jointSurgery: formEntries[0].jointSurgery,
          sprainsStrains: formEntries[0].sprainsStrains,
          highLowBloodPressure: formEntries[0].highLowBloodPressure,
          recentInjuries: formEntries[0].recentInjuries,
          additionalSymptomInfo: formEntries[0].additionalSymptomInfo,
          digitalSignature: formEntries[0].digitalSignature,
        });
      }
    } catch (err) {
      console.log(err);
    }
  },
  submitIntakeForm: async (req, res) => {
    console.log(req.body);
    try {
      await Intake.findOneAndUpdate(
        { emailAddress: req.body.userEmail }, // Search for document with same email
        requestBodyToDocument(req), // Upsert (update or insert)
        { upsert: true, new: true }
      );
      console.log('Form has been submitted');
      res.redirect('/confirmation');
    } catch (err) {
      console.log(err);
    }
  },
};

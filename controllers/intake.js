const PatientInfo = require('../models/PatientInfo')
const Intake = require('../models/PatientInfo')

module.exports = {
    getSubmission: async (req, res) => {
        try {
            //PatientInfo.js needs to be changed to capitalized
            const formEntries = await PatientInfo.find({ userId: req.user._id })
            console.log(formEntries)
            if (formEntries.length === 0) {
                res.render('intake.ejs')
            } else {
                res.render('intake.ejs', {
                    givenName: formEntries[0].givenName,
                    familyName: formEntries[0].familyName,
                    address: formEntries[0].address,
                    city: formEntries[0].city,
                    state: formEntries[0].state,
                    zipCode: formEntries[0].zipCode,
                    phoneNumber: formEntries[0].phoneNumber,
                    emailAddress: formEntries[0].userEmail,
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
                    dateOfSubmission: formEntries[0].dateOfSubmission
                })
            }

        } catch (err) {
            console.log(err)
        }
    },
    submitIntakeForm: async (req, res) => {
        try {
            await Intake.create({
                userId: req.user._id,
                givenName: req.body.givenName,
                familyName: req.body.familyName,
                address: req.body.streetAddress,
                city: req.body.userCity,
                state: req.body.userState,
                zipCode: req.body.userZip,
                phoneNumber: req.body.userPhone,
                emailAddress: req.body.userEmail,
                occupation: req.body.userOccupation,
                emergencyContact: req.body.userContact,
                emergencyContactPhone: req.body.userContactPhone,
                emergencyContactRelationship: req.body.userContactPhone,
                physician: req.body.userPhysician,
                physicianPhone: req.body.userPhysicianPhone,
                medicalConditions: req.body.userHealthConditons || null,
                currentMedications: req.body.userMedications || null,
                headaches: req.body.headaches,
                majorAccident: req.body.accident,
                allergies: req.body.allergies,
                varicoseVeins: req.body.varicoseVeins,
                arthritisTendonitis: req.body.arthritis,
                bloodClots: req.body.bloodClots,
                cancer: req.body.cancer,
                neckBackInjuries: req.body.backInjury,
                tmj: req.body.tmj,
                diabetes: req.body.diabetes,
                abnormalSkinConditions: req.body.skinConditions,
                fibromyalgia: req.body.fibromyalgia,
                heartCirculationProblems: req.body.heartCondition,
                numbness: req.body.numbness,
                jointSurgery: req.body.jointSurgery,
                sprainsStrains: req.body.sprains,
                highLowBloodPressure: req.body.bloodPressure,
                recentInjuries: req.body.recentInjuries,
                additionalSymptomInfo: req.body.conditionDetails || null,
                digitalSignature: req.body.userSignature,
                dateOfSubmission: req.body.currentDate
            })
            console.log('Form has been submitted')
            res.redirect('/confirmation')
        } catch (err) {
            console.log(err)
        }
    }
}
const PatientInfo = require('../models/PatientInfo')
const Intake = require('../models/PatientInfo')

module.exports = {
    getSubmission: async (req, res) => {
        try{
            //PatientInfo.js needs to be changed to capitalized
            const formEntries = await PatientInfo.find( {userId: req.user._id} )
            console.log(formEntries)
            if (formEntries.length === 0) {
                 res.render('intake.ejs')    
            } else{
                res.render('intake.ejs', {
                    givenName: formEntries[0].givenName,
                    familyName: formEntries[0].familyName,
                    address: formEntries.address,
                    city: formEntries.city,
                    state: formEntries[0].state,
                    zipCode: formEntries.zipCode,
                    phoneNumber: formEntries.phoneNumber,
                    emailAddress: formEntries.userEmail,
                    occupation: formEntries.occupation,
                    emergencyContact: formEntries.emergencyContact,
                    emergencyContactPhone: formEntries.emergencyContactPhone,
                    emergencyContactRelationship: formEntries.emergencyContactRelationship,
                    physician: formEntries.physician,
                    physicianPhone: formEntries.physicianPhone,
                    medicalConditions: formEntries.medicalConditions,
                    currentMedications: formEntries.currentMedications,
                    headaches: formEntries.headaches,
                    majorAccident: formEntries.majorAccident,
                    allergies: formEntries.allergies,
                    varicoseVeins: formEntries.varicoseVeins,
                    arthritisTendonitis: formEntries.arthritisTendonitis,
                    bloodClots: formEntries.bloodClots,
                    cancer: formEntries.cancer,
                    neckBackInjuries: formEntries.neckBackInjury,
                    tmj: formEntries.tmj,
                    diabetes: formEntries.diabetes,
                    abnormalSkinConditions: formEntries.abnormalSkinConditions,
                    fibromyalgia: formEntries.fibromyalgia,
                    heartCirculationProblems: formEntries.heartCirculationProblems,
                    numbness: formEntries.numbness,
                    jointSurgery: formEntries.jointSurgery,
                    sprainsStrains: formEntries.sprainsStrains,
                    highLowBloodPressure: formEntries.highLowBloodPressure,
                    recentInjuries: formEntries.recentInjuries,
                    additionalSymptomInfo: formEntries.additionalSymptomInfo,
                    digitalSignature: formEntries.digitalignature,
                    dateOfSubmission: formEntries.dateOfSubmission
                })
            }
                
        } catch(err) {
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
            res.redirect('/')
        } catch(err) {
            console.log(err)
        }
    }
}
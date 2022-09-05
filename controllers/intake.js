const Intake = require('../models/PatientRecords')

module.exports = {
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
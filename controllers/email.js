const postmark = require("postmark")
const User = require('../models/User')
const PatientInfo = require('../models/PatientInfo')

module.exports = {
    getUser: async (req, res) => {
        try {
            console.log(req.user)
            const userData = req.user
            const userForm = await PatientInfo.find({ userId: userData._id })
            console.log(`Sent from in the getUser block`)
            console.log(userData, userForm)
            res.redirect('/intake')
        } catch (err) {
            console.log(err)
        }
    },
    sendEmail: async (req, res) => {
        try {
            // Should have code to receive info from the user and database from the getUser function above.  You can probably either run the function and save the variables, or probably better to just move the userData/userForm from that block into here and get rid of getUser.

            // Something like:
            // const userData = req.user
            // const userForm = await PatientRecord.find({userId: userData._id})

            client.sendEmail({
                "From": "amethyst@amethystbibby.com",
                "To": "amethyst@amethystbibby.com",
                "Subject": "Medical Intake Form Completed",
                "MessageStream": "outbound",
                "TemplateAlias": 'formSubmission',
                "TemplateModel": {
                    // Replace patient with PatientInfo object fetched from database
                    "patient": {
                        "givenName": userForm.givenName,
                        "familyName": "familyName_Value",
                        "address": "address_Value",
                        "city": "city_Value",
                        "state": "state_Value",
                        "zipCode": "zipCode_Value",
                        "phoneNumber": "phoneNumber_Value",
                        "emailAddress": "emailAddress_Value",
                        "occupation": "occupation_Value",
                        "emergencyContact": "emergencyContact_Value",
                        "emergencyContactPhone": "emergencyContactPhone_Value",
                        "emergencyContactRelationship": "emergencyContactRelationship_Value",
                        "physician": "physician_Value",
                        "physicianPhone": "physicianPhone_Value",
                        "digitalSignature": "digitalSignature_Value"
                    },
                }
            });

            console.log("Email sent")
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
}
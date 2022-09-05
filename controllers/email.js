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
                // "To": userForm.emailAddress,
                "To": "patientintakeapplication@gmail.com",
                "Subject": "Medical Intake Form Completed",
                "MessageStream": "outbound",
                "TemplateAlias": 'formSubmission',
                "TemplateModel": {
                    // Replace patient with PatientInfo object fetched from database
                    "patient": {
                        "givenName": userForm.givenName,
                        "familyName": userForm.familyName,
                        "address": userForm.address,
                        "city": userForm.city,
                        "state": userForm.state,
                        "zipCode": userForm.zipCode,
                        "phoneNumber": userForm.phoneNumber,
                        "emailAddress": userForm.emailAddress,
                        "occupation": userForm.occupation,
                        "emergencyContact": userForm.emergencyContact,
                        "emergencyContactPhone": userForm.emergencyContactPhone,
                        "emergencyContactRelationship": userForm.emergencyContactRelationship,
                        "physician": userForm.physician,
                        "physicianPhone": userForm.physicianPhone,
                        "digitalSignature": userForm.digitalSignature
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
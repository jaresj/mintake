const postmark = require("postmark")

module.exports = {
    sendEmail: async (req, res) => {
        try {
            let client = new postmark.ServerClient(process.env.POSTMARK_STRING)

            client.sendEmail({
                "From": "amethyst@amethystbibby.com",
                "To": "amethyst@amethystbibby.com",
                "Subject": "Medical Intake Form Completed",
                "MessageStream": "outbound",
                "TemplateAlias": 'formSubmission',
                "TemplateModel": {
                    // Replace patient with PatientInfo object fetched from database
                    "patient": {
                        "givenName": "givenName_Value",
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
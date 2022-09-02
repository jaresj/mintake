const postmark = require("postmark")

module.exports = {
    sendEmail: async (req, res) => {
        try {
            let client = new postmark.ServerClient("69820d00-e72f-4384-90d9-596f45208621")

            client.sendEmail({
                "From": "amethyst@amethystbibby.com",
                "To": "amethyst@amethystbibby.com",
                "Subject": "Medical Intake Form Completed",
                // Will render ejs template showing answers instead of this
                "HTMLBody": "<strong>Hello</strong>",
                "TextBody": "Hello",
                "MessageStream": "outbound"
            });

            console.log("Email sent")
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
}
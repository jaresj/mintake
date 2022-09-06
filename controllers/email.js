const postmark = require('postmark');

module.exports = {
  // getUser: async (req, res) => {
  //   try {
  //     console.log(req.user);
  //     const userData = req.user;
  //     const userForm = await PatientInfo.find({ userId: userData._id });
  //     console.log(`Sent from in the getUser block`);
  //     console.log(userData, userForm);
  //     res.redirect('/intake');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  sendEmail: (req, res) => {
    try {
      const userData = req.user
      // const userForm = await PatientRecord.find({userId: userData._id})
      let client = new postmark.ServerClient(process.env.POSTMARK_STRING);

      client.sendEmail({
        "From": 'Mintake Coordination Team <amethyst@amethystbibby.com>',
        "To": 'patientintakeapplication@gmail.com',
        // Switch out "To" field to the following to send to actual users:
        // "To": userData.email,
        "Subject": 'Medical Intake Form Completed',
        "MessageStream": 'outbound',
        "HtmlBody": "<h3>Valued Patient,</h3><br><p><b>Thank you for submitting your intake form for your upcoming appointment.  Your responses have been recorded and will be sent to your doctor for review prior to your appointment.<br><br>Best Wishes,<br><br>The Mintake Team</b></p>"
      });

      console.log('Email sent');
      res.redirect('/')
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  },
};

const submitButton = document.querySelector('#submit');
const emailButton = document.querySelector('#email');

submitButton.addEventListener('click', submitUserForm);
emailButton.addEventListener('click', sendEmail);

// Will need to re-add an event listener to the submit button for emails when ready.

async function submitForm() {
  try {
    const response = await fetch('intake/submitIntake', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function sendEmail() {
  try {
    const response = await fetch('intake/sendEmail', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function submitUserForm() {
  try {
    const response = await fetch('submitUserForm', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

const emailButton = document.querySelector('#email');

async function sendEmail() {
  try {
    const response = await fetch('confirmation/sendEmail', {
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

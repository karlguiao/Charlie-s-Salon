/*
Name: Guiao, Karl Christian D.
Section: WD - 303 | WEBPUB
Activity: Landing Page for a Local Business 
*/

  const form = document.getElementById('signup');
  const submittedInfo = document.getElementById('display-container');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get data
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not selected';
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const birth = document.getElementById('birth').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Display data
    submittedInfo.innerHTML = `
      <h3>Submitted Information</h3>
      <p><strong>First Name:</strong> ${fname}</p>
      <p><strong>Last Name:</strong> ${lname}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date of Birth:</strong> ${birth}</p>
      <p><strong>Username:</strong> ${username}</p>
      <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
    `;

    // Make the box visible
    submittedInfo.style.display = "block";

    // Manual reset of the form since the .reset() built-in method don't work
    form.querySelectorAll('input').forEach(input => {
      if (
        input.type !== 'submit' &&
        input.type !== 'reset'
      ) {
        if (input.type === 'radio' || input.type === 'checkbox') {
          input.checked = false;
        } else {
          input.value = '';
        }
      }
    });
  });
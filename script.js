function validateForm(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const dateInput = document.getElementById('date');
    const colorInput = document.getElementById('color');
    
    if (!nameInput.value) {
      alert('Please enter your name.');
      return;
    }
    
    if (!emailInput.value) {
      alert('Please enter your email.');
      return;
    }
    
    if (!phoneInput.value) {
      alert('Please enter your phone number.');
      return;
    }
    
    if (!passwordInput.value) {
      alert('Please enter a password.');
      return;
    }
    
    if (passwordInput.value.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    
    if (!ageInput.value) {
      alert('Please enter your age.');
      return;
    }
    
    if (ageInput.value < 18) {
      alert('You must be at least 18 years old.');
      return;
    }
    
    if (!genderInput.value) {
      alert('Please select your gender.');
      return;
    }
    
    if (!dateInput.value) {
      alert('Please select a date.');
      return;
    }
    
    if (!colorInput.value) {
      alert('Please select a color.');
      return;
    }
    
    alert('Form submitted successfully!');
    // You can perform further actions or send the form data to a server here
  }
  
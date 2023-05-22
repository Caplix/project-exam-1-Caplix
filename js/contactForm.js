let hamburger = document.querySelector(".hamburger")

let navbar = document.querySelector(".navbar")

let menuOpen = false


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const errors = [];
  
    if (name.length < 5) {
      errors.push('Name should be at least 5 characters long');
    }
  
    if (!validateEmail(email)) {
      errors.push('Please enter a valid email address');
    }
  
    if (subject.length < 15) {
      errors.push('Subject should be at least 15 characters long');
    }
  
    if (message.length < 25) {
      errors.push('Message should be at least 25 characters long');
    }
  
    if (errors.length > 0) {
        const errorContainer = document.getElementById('errorContainer');
      errorContainer.innerHTML = '';
      for (var i = 0; i < errors.length; i++) {
        errorContainer.innerHTML += '<p>' + errors[i] + '</p>';
      }
    } else {
      sendFormData(name, email, subject, message);
    }
  });
  
  function validateEmail(email) {
    const regex =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    return regex.test(email);
  }
  
  function sendFormData(name, email, subject, message) {

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  
    alert('Form submitted successfully!');
  }


  hamburger.onclick = () =>{
    if (!menuOpen){
        hamburger.classList.toggle("active")
        navbar.classList.toggle("activeNav")

        menuOpen = true
    } else {
        hamburger.classList.toggle("active")
        navbar.classList.toggle("activeNav")

        menuOpen = false
    }

};
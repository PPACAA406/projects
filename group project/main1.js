document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
     
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
    
      if (name === "") {
        alert("Please enter your name.");
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
   
      if (message.length < 10) {
        alert("Message should be at least 10 characters long.");
        return;
      }
  
    
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      
  
      form.reset();
    });
  });
  
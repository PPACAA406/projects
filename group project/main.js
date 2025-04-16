
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
      event.preventDefault(); 
  
  
      const name = document.getElementById("username").value.trim();
      const color = document.getElementById("colors").value;
  
     
      if (name === "") {
        alert("Please enter your name.");
        return;
      }
  
   
      const greetings = ["Hello", "Hi", "Welcome"];
      const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
      let message;
      if (color === "Red") {
        message = `${greeting} ${name}, red is a bold choice!`;
      } else {
        message = `${greeting} ${name}, ${color} suits you well!`;
      }
  
 
      $("#output").text(message).fadeIn(500).delay(2000).fadeOut(500);
    });
  });
  
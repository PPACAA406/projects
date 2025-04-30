document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("username").value.trim();
    const color = document.getElementById("colors").value;

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    const greetings = ["Hello", "Hi", "Welcome", "Greetings", "Hey there"];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    let message;
    if (color === "Red") {
      message = `${greeting} ${name}, red is a bold choice!`;
    } else {
      message = `${greeting} ${name}, ${color} suits you well!`;
    }

    
    const output = $("#output");
    output.removeClass();

    if (color.toLowerCase() === "blue") {
      output.addClass("alert alert-primary");
    } else if (color.toLowerCase() === "red") {
      output.addClass("alert alert-danger");
    } else if (color.toLowerCase() === "green") {
      output.addClass("alert alert-success");
    } else {
      output.addClass("alert alert-info");
    }

    console.log("Available Greetings:");
    greetings.forEach(function (greet) {
      console.log(greet);
    });


    const longGreetings = greetings.filter(g => g.length > 4);
    console.log("Long greetings:", longGreetings);

    output.text(message).fadeIn(500).delay(2000).fadeOut(500);
  });
});

$(document).ready(function() {
  console.log("jQuery is working!");
});

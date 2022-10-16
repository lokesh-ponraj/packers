// numbers animation

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 800;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});





// form submission
function submitForm(){
var form = document.getElementById('form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("form")),
          }).then(
              response => response.json()
          ).then((html) => {
            window.open('index.html', '_blank');

          });
        });

}
// popup
let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popUp");
}


// mailid validation
function validateMail(){
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text2");
  var emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  if(email.match(emailpattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Email is valid";
    text.style.color = "#006400";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Enter a valid email address";
    text.style.color = "#ff0000";
  }
  if(email ==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#006400";
  }

}


// name validation
function validateName(){
  var name = document.getElementById("name").value;
  var text1 = document.getElementById("text1");
  var namepattern = /^[A-Za-z]+$/;

  if(name.match(namepattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "Name is valid";
    text1.style.color = "#006400";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text1.innerHTML = "Enter a valid name";
    text1.style.color = "#ff0000";

  }
  if(name ==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text1.innerHTML = "";
    text1.style.color = "#006400";
  }
}

// mobileno validation
function validateNumber(){
  var phnumber = document.getElementById("number").value;
  var text2 = document.getElementById("text3");
  var numberPattern = /^\d{10}$/;


  if(phnumber.match(numberPattern)){
    form.classList.add("valid");
      form.classList.remove("invalid");
      text2.innerHTML = "Number is valid";
      text2.style.color = "#006400";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text2.innerHTML = "Enter a valid number";
    text2.style.color = "#ff0000";
  }
  if(phnumber ==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text2.innerHTML = "";
    text2.style.color = "#006400";
  }
}


// from add validation
function validateFrom(){
  var from = document.getElementById("from").value;
  var text3 = document.getElementById("text4");
  var frompattern = /^[A-Za-z]+$/;


  if(from.match(frompattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text3.innerHTML = "Address is valid";
    text3.style.color = "#006400";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text3.innerHTML = "Enter a valid Address";
    text3.style.color = "#ff0000";

  }
  if(from ==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text3.innerHTML = "";
    text3.style.color = "#006400";
  }
}

// toaddvalidation
function validateTo(){
  var to = document.getElementById("to").value;
  var text4 = document.getElementById("text5");
  var topattern = /^[A-Za-z]+$/;


  if(to.match(topattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text4.innerHTML = "Address is valid";
    text4.style.color = "#006400";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text4.innerHTML = "Enter a valid Address";
    text4.style.color = "#ff0000";

  }
  if(to ==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text4.innerHTML = "";
    text4.style.color = "#006400";
  }
}
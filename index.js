
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("success!");
});



button.addEventListener("click", function() {
    alert("you clicked");
});



const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});



const messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", function() {
    document.getElementById("message").textContent = "welcome!";
});
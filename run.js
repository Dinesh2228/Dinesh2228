var toggleBtn = document.getElementById("toggle-btn");
var contactBox = document.getElementById("contact-box");

toggleBtn.addEventListener("click", function() {
  contactBox.classList.toggle("hidden");
});
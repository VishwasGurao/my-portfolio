
function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
  }

  var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=allsetpc@gmail.com&su=New Inquiry from " + encodeURIComponent(name) + "&body=Name: " + encodeURIComponent(name) + "%0AEmail: " + encodeURIComponent(email) + "%0AMessage: " + encodeURIComponent(message);

  window.open(mailtoLink, "_blank");
}

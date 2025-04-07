const themeToggle = document.getElementById('darkModeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '🌝'; // Sun icon for Light Mode
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '🌚'; // Moon icon for Dark Mode
    }
});

// Apply saved theme on page load
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '🌝'; // Show Sun if dark mode is enabled
    } else {
        themeToggle.innerHTML = '🌚'; // Show Moon if light mode is enabled
    }
};


function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=guraovishwas@gmail.com&su=New Inquiry from " + encodeURIComponent(name) + "&body=Name: " + encodeURIComponent(name) + "%0AEmail: " + encodeURIComponent(email) + "%0AMessage: " + encodeURIComponent(message);

    window.open(mailtoLink, "_blank");
}


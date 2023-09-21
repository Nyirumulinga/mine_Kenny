function submitForm() {
    var form = document.getElementById("admissionForm");
    var isValid = form.checkValidity();

    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill out all required fields.");
    }
}

function submitLoginForm() {
    var form = document.getElementById("loginForm");
    var isValid = form.checkValidity();

    if (isValid) {
        alert("Login successful!");
    } else {
        alert("Please enter a valid username and password.");
    }
}
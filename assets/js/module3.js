const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";
    togglePassword.textContent = "Show";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = password.value.trim();

  if (email === "" || pass === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.textContent = "Invalid email address.";
    return;
  }

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const student = students.find(function (item) {
    return item.email === email && item.password === pass;
  });

  if (student) {
    localStorage.setItem("loggedInStudent", JSON.stringify(student));
    alert(localStorage.getItem("loggedInStudent"));

    message.style.color = "green";
    message.textContent = "Login Successful!";

    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Incorrect email or password.";
  }
});

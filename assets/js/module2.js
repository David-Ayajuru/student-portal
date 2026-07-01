const registerForm = document.getElementById("registerForm");
const messageBox = document.getElementById("messageBox");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const genderError = document.getElementById("genderError");
const departmentError = document.getElementById("departmentError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.getElementById("gender").value;
  const department = document.getElementById("department").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  clearErrors();
  messageBox.className = "";
  messageBox.style.display = "none";
  messageBox.textContent = "";

  let isValid = true;

  if (fullName === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  } else if (fullName.length < 3) {
    nameError.textContent = "Full name must be at least 3 characters.";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (phone === "") {
    phoneError.textContent = "Phone number is required.";
    isValid = false;
  } else if (phone.length < 10) {
    phoneError.textContent = "Phone number must be at least 10 digits.";
    isValid = false;
  }

  if (gender === "") {
    genderError.textContent = "Please select your gender.";
    isValid = false;
  }

  if (department === "") {
    departmentError.textContent = "Department is required.";
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (!isValid) return;

  let students = JSON.parse(localStorage.getItem("students")) || [];

  const existingStudent = students.find((student) => student.email === email);

  if (existingStudent) {
    showMessage("This email is already registered. Please log in.", "failure");
    return;
  }

  const newStudent = {
    fullName,
    email,
    phone,
    gender,
    department,
    password,
    courses: [],
    tasks: [],
  };

  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));

  showMessage("Registration successful! You can now log in.", "success");

  registerForm.reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});

function validateEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  return emailPattern.test(email);
}

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  genderError.textContent = "";
  departmentError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
}

function showMessage(message, type) {
  messageBox.textContent = message;
  messageBox.className = type;
  messageBox.style.display = "block";
}

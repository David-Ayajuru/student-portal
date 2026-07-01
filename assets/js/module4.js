const student = JSON.parse(localStorage.getItem("loggedInStudent"));

if (!student) {
  window.location.href = "login.html";
}

document.getElementById("welcome").textContent =
  "Welcome, " + student.fullName + "!";

document.getElementById("name").textContent = student.fullName;

document.getElementById("email").textContent = student.email;

document.getElementById("phone").textContent = student.phone;

document.getElementById("gender").textContent = student.gender;

document.getElementById("department").textContent = student.department;

document.getElementById("courseCount").textContent = student.courses.length;

function updateTime() {
  const now = new Date();

  document.getElementById("datetime").textContent = now.toLocaleString();
}

updateTime();

setInterval(updateTime, 1000);

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("loggedInStudent");

  window.location.href = "login.html";
});

let student = JSON.parse(localStorage.getItem("loggedInStudent"));

if (!student) {
  alert("Please log in first.");
  window.location.href = "login.html";
}

if (!student.courses) {
  student.courses = [];
}

const courseList = document.getElementById("courseList");
const courseCount = document.getElementById("courseCount");
const message = document.getElementById("message");

function displayCourses() {
  courseList.innerHTML = "";

  student.courses.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = course;
    courseList.appendChild(li);
  });

  courseCount.textContent = student.courses.length;
}

function registerCourse(course) {
  if (student.courses.includes(course)) {
    message.style.color = "red";
    message.textContent = "Course already registered.";
    return;
  }

  student.courses.push(course);

  localStorage.setItem("loggedInStudent", JSON.stringify(student));

  let students = JSON.parse(localStorage.getItem("students")) || [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].email === student.email) {
      students[i] = student;
      break;
    }
  }

  localStorage.setItem("students", JSON.stringify(students));

  message.style.color = "green";
  message.textContent = course + " registered successfully.";

  displayCourses();
}

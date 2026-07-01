let student = JSON.parse(localStorage.getItem("loggedInStudent"));

if (!student) {
  alert("Please login first.");
  window.location.href = "login.html";
}

if (!student.tasks) {
  student.tasks = [];
}

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function saveData() {
  localStorage.setItem("loggedInStudent", JSON.stringify(student));

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students = students.map(function (item) {
    if (item.email === student.email) {
      item.tasks = student.tasks;
    }

    return item;
  });

  localStorage.setItem("students", JSON.stringify(students));
}

function displayTasks() {
  taskList.innerHTML = "";

  student.tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
            <span>${task.text}</span>

            <div class="actions">

                <button onclick="completeTask(${index})">
                    ✓
                </button>

                <button onclick="editTask(${index})">
                    Edit
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Enter a task.");
    return;
  }

  student.tasks.push({
    text: text,
    completed: false,
  });

  taskInput.value = "";

  saveData();

  displayTasks();
}

function completeTask(index) {
  student.tasks[index].completed = !student.tasks[index].completed;

  saveData();

  displayTasks();
}

function editTask(index) {
  const updated = prompt("Edit Task", student.tasks[index].text);

  if (updated !== null && updated.trim() !== "") {
    student.tasks[index].text = updated.trim();

    saveData();

    displayTasks();
  }
}

function deleteTask(index) {
  student.tasks.splice(index, 1);

  saveData();

  displayTasks();
}

displayTasks();

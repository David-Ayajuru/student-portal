const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields.");

    return;
  }

  successMessage.textContent = "Your message has been sent successfully!";

  form.reset();
});

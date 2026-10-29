
const dialog = document.getElementById("info-dialog");
const openButton = document.getElementById("open-dialog");
const studentForm = document.getElementById("student-form");
const formMessage = document.getElementById("form-message");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const studentName =
    document.getElementById("student-name").value.trim();

  formMessage.textContent =
    `Form validated for ${studentName}. Demo only; no data was saved.`;

  studentForm.reset();
});

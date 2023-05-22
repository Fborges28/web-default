import axios from "axios";
const url = `http://localhost:3000/`;

const form =
  (document.getElementById("registerForm") as HTMLFormElement) || undefined;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const formData = new FormData(form);

  console.log(formData);
});

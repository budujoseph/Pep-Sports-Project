// Registeration Summary

function registrationSummary() {
  const registerFormInfo = document.getElementById("form-info");

  if (!registerFormInfo) return;

  const urlParams = new URLSearchParams(window.location.search);
  //console.log(urlParams);
  const getValue = (key) => urlParams.get(key) || "Not Provided";

  registerFormInfo.innerHTML = `
     <h2>Child's Information</h2>
    <p><strong>First Name:</strong> ${getValue("firstname")}</p>
    <p><strong>Last Name:</strong> ${getValue("lastname")}</p>
    <p><strong>Birth Date:</strong> ${getValue("birthdate")}</p>
    <p><strong>Sport:</strong> ${getValue("sports")}</p>
    <p><strong>Country:</strong> ${getValue("country")}</p>
    <hr>
    <h2>Guardian Information</h2>
    <p><strong>Full Name:</strong> ${getValue("parent-fullname")}</p>
    <p><strong>Phone:</strong> ${getValue("phone")}</p>
    <p><strong>Email:</strong> ${getValue("email")}</p>
    `;

  registerFormInfo.addEventListener("submit", (e) => {
    e.preventDefault();

    registerFormInfo.reset();
  });

  const printBtn = document.createElement("button");
  printBtn.textContent = "Print Registration";

  printBtn.addEventListener("click", () => window.print());

  registerFormInfo.appendChild(printBtn);
}

registrationSummary();

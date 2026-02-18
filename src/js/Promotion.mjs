import { setLocalStorageItem, getLocalStorageItem } from "/src/js/Storage.mjs";
 
export class NewsLetter {
    constructor() {
        this.subForm = document.querySelector(".sub-form");
        this.subMsg = document.getElementById("sub-msg");
    }

    init() { 
        const subscribers = getLocalStorageItem("subscribers") || [];
        if (subscribers.length > 0) {
            this.subForm.style.display = "none";
            
        } else {
            this.subForm.addEventListener("submit", this.handleSubmit.bind(this));
            this.subMsg.style.display = "none";
        }
           
    }

    handleSubmit(event) {
        event.preventDefault();
        const emailInput = document.getElementById("sub-email");
        const email = emailInput.value.trim();
        let subscribers = getLocalStorageItem("subscribers") || [];
        if(!subscribers.includes(email)) {
            subscribers.push(email);
            setLocalStorageItem("subscribers", subscribers);
        }

        this.subForm.style.display = "none";
        this.subMsg.style.display = "block";

        this.subMsg.classList.add("showup")

        setTimeout(() => {
            this.subMsg.classList.remove("showup");
            this.subMsg.style.display = "none";
        }, 3000);

    }
        
}

export function initLoginForm() {
    const loginDialog = document.querySelector("#loginDialog");
    const closeLoginBtn = document.querySelector("#closeLoginBtn");
    const openRegisterLink = document.querySelector("#openRegister");
    const registerDialog = document.querySelector("#registerDialog");

    if (!loginDialog) return;
    
    setTimeout(() => {
        loginDialog.showModal();
    }, 3000);

    closeLoginBtn?.addEventListener("click", () => {
        loginDialog.close();
    });

    openRegisterLink?.addEventListener("click", (e) => {
        e.preventDefault();
        loginDialog.close();
        registerDialog.showModal();
    });
}

// Register Form

export function initRegisterForm() {
    const registerDialog = document.querySelector("#registerDialog");
    if (!registerDialog) return;
    
    const closeRegisterBtn = document.querySelector("#closeRegisterBtn");
    const registerForm = registerDialog.querySelector("#registerForm");
    const loginForm = document.querySelector("#loginDialog #loginForm");

    closeRegisterBtn?.addEventListener("click", () => {
        registerDialog.close();
    });

    registerForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("registerFullName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value.trim();

        setLocalStorageItem("registeredUser", { fullName, email, password });
        alert("Registration successful! Please log in.");
        
        alert("Registration successful!");
        registerDialog.close();
        loginDialog.showModal();
    });

    loginForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const registeredUser = getLocalStorageItem("registeredUser");
        if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
            alert("Login successful!");
            loginDialog.close();
        } else {
            alert("Invalid email or password.");
        }
    });
  
}

// Registeration Summary

export function registerationSummary() {
    const registerFormInfo = document.getElementById("form-info");

    if (!registerFormInfo) return;

    const urlParams = new URLSearchParams(window.location.search);
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

    const printBtn = document.createElement("button");
    printBtn.textContent = "Print Registration";
    printBtn.style.marginTop = "1rem";

    printBtn.addEventListener("click", () => window.print());

    registerFormInfo.appendChild(printBtn);
}
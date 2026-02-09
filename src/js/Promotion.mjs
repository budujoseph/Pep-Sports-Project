import { setLocalStorageItem, getLocalStorageItem } from "./Storage.mjs";
 
export class NewsLetter {
    constructor() {
        this.subForm = document.querySelector(".sub-form");
        this.subMsg = document.getElementById("sub-msg");
    }

    init() { 
        this.subForm.addEventListener("submit", this.handleSubmit.bind(this));
        this.subMsg.style.display = "none";
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
    const registerDialog = document.querySelector("#registerDialog");

    const closeLoginBtn = document.querySelector("#closeLoginBtn");
    const closeRegisterBtn = document.querySelector("#closeRegisterBtn");
    const openLoginLink = document.querySelector("#openLogin");

    setTimeout(() => {
        loginDialog.showModal();
    }, 3000)
    
    closeLoginBtn.addEventListener("click", () => {
        loginDialog.close();
    });

    openLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginDialog.close();
        registerDialog.showModal();
    });

    closeRegisterBtn.addEventListener("click", () => {
        registerDialog.close();
        window.location.href = "src/index.html";
    });

    const registerForm = registerDialog.querySelector("form");
    registerForm.addEventListener("submit", (e) => { 
        e.preventDefault();
        const fullName = registerForm.querySelector("#registerFullName").value.trim();
        const email = registerForm.querySelector("#registerEmail").value.trim();
        const password = registerForm.querySelector("#registerPassword").value.trim();

        setLocalStorageItem("fullName", fullName);
        setLocalStorageItem("email", email);
        setLocalStorageItem("password", password);

        registerDialog.close();
        window.location.href = "src/index.html";

        alert("Registration successful!");
        registerDialog.close();
        window.location.href = "src/index.html";
    });

   registerBtn = document.querySelector(".switch-text a");
   registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginDialog.close();
        registerDialog.showModal();
   });

}
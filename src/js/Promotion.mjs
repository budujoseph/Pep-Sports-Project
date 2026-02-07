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

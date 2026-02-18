
export function initNavigation() {
    const hamburger = document.getElementById("trygram");
    const menuLinks = document.querySelector("#nav-animation");

    hamburger.addEventListener("click", () => { 
        // console.log("Hamburger menu clicked");
        menuLinks.classList.toggle("show");
        hamburger.classList.toggle("show");
    });

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (new URL(link.href).pathname === currentPath) {
            // console.log("Active page:", activePage);
            link.classList.add("active");
        }
    });
}



export async function FetchEvents() {
    

    const eventsPath = "/data/events.json";
    const eventContainer = document.querySelector(".events-container");
        try {
            const res = await fetch(eventsPath);
            if (res.ok) {
                const data = await res.json();
                // console.log(data);

                const threeEvent = data.events
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            
                displayEvents(threeEvent, eventContainer);
            
            } 
        } catch (error) {
            throw new Error(`FetchEvents Error: ${error.message}`);
        }
}

function displayEvents(events, container) {
    container.innerHTML = "";
    events.forEach(event => {
        const eventElement = document.createElement("section");
        eventElement.classList.add("events-card");

        eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.name}" loading="lazy"/>
            <h3>${event.name}</h3>
            <button class="openDialog">Learn More</button>
            <dialog>
                <p>${event.description}</p>
                <button class="closeDialog">Close</button>
            </dialog>
        `;

        container.appendChild(eventElement);

        const openDialogButton = eventElement.querySelector(".openDialog");
        const closeDialogButton = eventElement.querySelector(".closeDialog");
        const dialog = eventElement.querySelector("dialog");

        openDialogButton.addEventListener("click", () => {
            dialog.showModal();
        });

        closeDialogButton.addEventListener("click", () => {
            dialog.close();
        });

    });
}
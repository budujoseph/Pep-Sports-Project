
export async function initAthletes() {
    try {
        const response = await fetch("../data/athletes.json");

        if (!response.ok) {
            throw new Error("Failed to load athletes data");
        }

        const athletesData = await response.json()
        console.log(athletesData);

        const athleteContainer = document.getElementById("athletes-container");
        const allAthletes = document.querySelector(".allAthletes");
        const fballBtn = document.querySelector(".fball-btn");
        const bballBtn = document.querySelector(".bball-btn");
        const vballBtn = document.querySelector(".vball-btn"); 

        function displayAthletes(athletesList) {
            athleteContainer.innerHTML = "";
            athletesList.forEach(athlete => {
                const athleteCard = document.createElement("div");
                athleteCard.classList.add("athlete-card");

                let name = document.createElement('h3');
                let sports = document.createElement('p');
                let age = document.createElement('p');
                let country = document.createElement('p');
                let portrait = document.createElement('img');

                portrait.src = athlete.imgUrl;
                portrait.alt = athlete.name;
                portrait.loading = "lazy";

                name.textContent = athlete.name;
                sports.textContent = `Sport: ${athlete.sport}`;
                age.textContent = `Age: ${athlete.age}`;
                country.textContent = `Country: ${athlete.country}`;

                athleteCard.append(portrait, name, sports, age, country);

                athleteContainer.appendChild(athleteCard);
            });
        }

        displayAthletes(athletesData.athletes)

        fballBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const filterFootball = athletesData.athletes.filter(athlete => athlete.sport === "Football");
            displayAthletes(filterFootball);
        });

        bballBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const filterBasketball = athletesData.athletes.filter(athlete => athlete.sport === "Basketball");
            displayAthletes(filterBasketball);
        });

        vballBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const filterVolleyball = athletesData.athletes.filter(athlete => athlete.sport === "Volleyball");
            displayAthletes(filterVolleyball);
        });

        allAthletes.addEventListener("click", (event) => {
            event.preventDefault();
            displayAthletes(athletesData.athletes);
        });

    } catch (error) {
        console.error("Failed to load athletes:", error);
    }
}
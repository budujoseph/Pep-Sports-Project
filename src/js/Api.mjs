

export async function getCountryData() {
    const countryApiUrl = "https://restcountries.com/v3.1/all?fields=name";
    const selectCountries = document.getElementById("countries");

    async function fetchCountries() {
        try {
            const response = await fetch(countryApiUrl);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                displayCountries(data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function displayCountries(data) {
        let countryOptions = `<option value="" >Select Your Country</option>`;
        countryOptions += data
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country) => {
                return `<option value= "${country.name.common}">
                            ${country.name.common}
                            </option>`
            })
            .join("");
        
        selectCountries.innerHTML = countryOptions;
    }

    fetchCountries();
}

// registration form reset

window.addEventListener("load", () => {
    const form = document.getElementById("register-form");
    if (form) form.reset(); // clears all inputs when page loads
});
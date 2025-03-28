// ETAPE 2
const city = document.querySelector("#city");
const gps = document.querySelector("#gps");
const temperature = document.querySelector("#temperature");
const OKButton= document.querySelector("button");
// const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&addressdetails=1&limit=1`;

// async function fetchTest() {
//     try {
//         const response = await fetch(`https://nominatim.openstreetmap.org/search?q=Nantes&format=json&addressdetails=1&limit=1`); 
//         console.log(response);
//     }
//     catch {
//         console.error("Failed to catch data details:", error);
//     }
// }

async function fetchCoordinates(cityName) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&  addressdetails=1&limit=1`); // récupère les données de l'API suivant un url précisé
        const cityURL = await response.json(); // met la réponse en JSON
        console.log(cityURL);

        OKButton.addEventListener("click", () => {
            city.innerText = city.name;
        })
    }
    catch {
        console.error("Failed to catch data details:", error);
    }
}

async function fetchWeather(cityName) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&  addressdetails=1&limit=1`); // récupère les données de l'API suivant un url précisé
        const cityURL = await response.json(); // met la réponse en JSON
        console.log(cityURL);

        const cityLat = cityURL.lat;
        const cityLon = cityURL.lon;

        OKButton.addEventListener("click", () => {
            response.innerHTML = `https://nominatim.openstreetmap.org/search?q=${city.name}&format=json&addressdetails=1&limit=1`;
            gps.innerText = cityLat + " " + cityLon;
        })
    }
    catch {
        console.error("Failed to catch data details:", error);
    }
}

fetchCoordinates(city);
fetchWeather(city);

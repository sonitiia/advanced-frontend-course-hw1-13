document.addEventListener("DOMContentLoaded", function () {

    const BASE_URL = "https://swapi.dev/api";

    async function getInformationAboutPlanets () {
        const req = await fetch(`${BASE_URL}/planets`);
        const data = await req.json();
        const planets = data.results;

        const planetList = document.getElementById("planet-list");

        planets.forEach(planet => {
            const planetWrapper = document.createElement("div");
            planetWrapper.classList.add("planet-wrapper");

            const name = document.createElement("h3");
            name.textContent = planet.name;
        
            const climate = document.createElement("p");
            climate.textContent = "Climate: " + planet.climate;

            const orbitalPeriod = document.createElement("p");
            orbitalPeriod.textContent = "Orbital period: " + planet.orbital_period;

            const gravity = document.createElement("p");
            gravity.textContent = "Gravity: " + planet.gravity;

            const population = document.createElement("p");
            population.textContent = "Population: " + planet.population;

            planetWrapper.appendChild(name);
            planetWrapper.appendChild(climate);
            planetWrapper.appendChild(orbitalPeriod);
            planetWrapper.appendChild(gravity);
            planetWrapper.appendChild(population);

            planetList.appendChild(planetWrapper);
        });
    };

    getInformationAboutPlanets();

});
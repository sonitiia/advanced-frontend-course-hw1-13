document.addEventListener("DOMContentLoaded", function () {

    const BASE_URL = "https://swapi.dev/api";

    var characterImages = {
        "https://swapi.dev/api/people/1/": "./assets/characters/Luke-Skywalker.png",
        "https://swapi.dev/api/people/2/": "./assets/characters/C-3PO.png",
        "https://swapi.dev/api/people/3/": "./assets/characters/R2-D2.png",
        "https://swapi.dev/api/people/4/": "./assets/characters/Darth-Vader.png",
        "https://swapi.dev/api/people/5/": "./assets/characters/Leia-Organa.png",
        "https://swapi.dev/api/people/10/": "./assets/characters/Obi-Wan-Kenobi.png",
        "https://swapi.dev/api/people/13/": "./assets/characters/Chewbacca.png",
        "https://swapi.dev/api/people/14/": "./assets/characters/Han-Solo.png",
        "https://swapi.dev/api/people/18/": "./assets/characters/Wedge-Antilles.png",
        "https://swapi.dev/api/people/20/": "./assets/characters/Yoda.png",
        "https://swapi.dev/api/people/21/": "./assets/characters/Palpatine.png",
        "https://swapi.dev/api/people/22/": "./assets/characters/Boba-Fett.png",
        "https://swapi.dev/api/people/23/": "./assets/characters/IG-88.png",
        "https://swapi.dev/api/people/24/": "./assets/characters/Bossk.png",
        "https://swapi.dev/api/people/25/": "./assets/characters/Lando-Calrissian.png",
        "https://swapi.dev/api/people/26/": "./assets/characters/Lobot.png",
    };

    async function getInformationAboutPeople (characterUrl, characterWrapper) {
        try {
            const req = await fetch(characterUrl);
            if (!req.ok) {
                throw new Error(`Failed to fetch data for ${characterUrl}`);
            }
            const data = await req.json();
            
            const characterInfo = document.createElement("div");
            characterInfo.classList.add("character-info");       
            
            const name = document.createElement("h3");
            name.textContent = data.name;

            const birthYear = document.createElement("p");
            birthYear.textContent = "Born: " + data.birth_year;

            const gender = document.createElement("p");
            gender.textContent = "Gender: " + data.gender;

            const characterImage = document.createElement("img");
            const characterImageUrl = characterImages[characterUrl];

            if (characterImageUrl) {
                characterImage.src = characterImageUrl;
                characterImage.alt = data.name;
                characterWrapper.appendChild(characterImage);
            }

            characterInfo.appendChild(name);
            characterInfo.appendChild(birthYear);
            characterInfo.appendChild(gender);

            characterWrapper.appendChild(characterInfo);
            characterWrapper.appendChild(characterImage);
        } catch (error) {
            console.log({error});
        }
    };

    async function getInformationAboutEpisode (filmNum) {
        try {
            const filmNumber = filmNum || 2;
            const req = await fetch(`${BASE_URL}/films/${filmNumber}/`);
            if (!req.ok) {
                throw new Error(`Failed to fetch episode ${filmNumber} data`);
            }
            const data = await req.json();
            const characters = data.characters;
    
            const charactersList = document.getElementById("characters-list");
            charactersList.innerHTML = '';
    
            characters.forEach(async characterUrl => {
                const characterWrapper = document.createElement("div");
                characterWrapper.classList.add("character-wrapper");
    
                await getInformationAboutPeople(characterUrl, characterWrapper);
    
                charactersList.appendChild(characterWrapper);
    
            });
        } catch (error) {
            
        }
        
    };

    const btn = document.getElementById("get-info");
    btn.addEventListener("click", () => {
        const input = document.getElementById("input-number");
        const filmNumber = input.value;
        getInformationAboutEpisode(filmNumber);
    });

    const nextBtn = document.getElementById("next");
    nextBtn.addEventListener("click", function() {
        window.location.href = "planets.html";
    });

});
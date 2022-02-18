const resultsContainer = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://breakingbadapi.com/api/characters/";

async function getNames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data.length; i++) {

            if (i === 10) {
              break;
           }
    
            resultsContainer.innerHTML += `<div> ${data[i].char_id}</div>`;
        }

    } catch (error) {
        console.log(error);
    }
}

getNames();
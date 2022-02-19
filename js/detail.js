const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// (console.log(id);

if (id === null) {
    location.href = "index.html";
}

const url = "https://breakingbadapi.com/api/characters/" + id;

const resultsContainer = document.querySelector(".deital-data");
const idContainer = document.querySelector(".id");


idContainer.innerHTML = id;

async function getNames() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const name = data[0];

        console.log(name);

        createHtml(name)
    
    } catch (error) {
        console.log(errorresultsContainer);
    }
}

getNames();


function createHtml(name) {
    resultsContainer.innerHTML = `<div>
            <div class="details-image" style="background-image: url('${name.img}')"></div>
            <h1>${name.name}</h1>
            <p>${name.category}</p> 
            <p>Nickname: ${name.nickname}</p>
            <p>${name.occupation}</p>
            </div>`;
}
const resultsContainer = document.querySelector(".deital-data");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://breakingbadapi.com/api/characters/" + id;

async function getNames() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const name = data;

        console.log(name);

        name.forEach(function(name) {
            resultsContainer.innerHTML = `<div>
            <div class="details-image" style="background-image: url('${name.img}')"></div>
            <h1>${name.name}</h1>
            <p>${name.category}</p> 
            <p>Nickname: ${name.nickname}</p>
            <p>${name.occupation[0]}</p>
            </div>`;
        })

    
    } catch (error) {
        console.log(error);
    }
}

getNames();
const dropdown = document.querySelector("select");
const resultsContainer = document.querySelector(".list");

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
    
           resultsContainer.innerHTML += `<a href="?id=" class="item"<h1>${data[i].name}</h1>
           </a>`;
        }

    } catch (error) {
        console.log(error);
    }
}

getNames();

dropdown.onchange = function() {
    console.log(event.target.value);

    resultsContainer.innerHTML = "Loading...";

    const selectedValue = this.value;

    setTimeout(function() {
        resultsContainer.innerHTML = " ";
        for(let i = 1; i <= selectedValue; i++) {
            resultsContainer.innerHTML += `<div class="item" ${item}"></div`;
        }

    }, 2000);

};

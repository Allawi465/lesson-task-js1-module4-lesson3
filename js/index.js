const dropdown = document.querySelector("select");
const resultsContainer = document.querySelector(".list");
const url = "https://breakingbadapi.com/api/characters/";

dropdown.onchange = function() {
    console.log(event.target.value);

    resultsContainer.innerHTML = "Loading...";

    const selectedValue = this.value;

    setTimeout(function() {
        resultsContainer.innerHTML = " ";
        for(let i = 1; i <= selectedValue; i++) {
            resultsContainer.innerHTML = `<a href="detail.html?id=" class="item">${i}</a>`;
        }

    }, 2000);

};

async function getNames() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const name = data;

        console.log(data);

        name.forEach(function(name) {
            resultsContainer.innerHTML += `<a href="detail.html?id=${name.char_id}" class="item">${name.char_id}</a>`;
        })


    } catch (error) {
        console.log(error);
    }
}

getNames()

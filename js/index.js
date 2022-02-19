const dropdown = document.querySelector("select");
const resultsContainer = document.querySelector(".list");

const url = "https://breakingbadapi.com/api/characters/";

dropdown.onchange = function() {
    console.log(event.target.value);

    resultsContainer.innerHTML = "Loading...";

    const selectedValue = this.value;
    resultsContainer.innerHTML = " ";
    for(let i = 1; i <= selectedValue; i++) {
        resultsContainer.innerHTML += `<a href="detail.html?id=${i}" class="item">${i}</a>`;
    }
};
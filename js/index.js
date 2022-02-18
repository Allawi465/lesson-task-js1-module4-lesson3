const dropdown = document.querySelector("select");
const resultsContainer = document.querySelector(".list");

dropdown.onchange = function() {
    console.log(event.target.value);

    resultsContainer.innerHTML = "Loading...";

    const selectedValue = this.value;

    setTimeout(function() {
        resultsContainer.innerHTML = " ";
        for(let i = 1; i <= selectedValue; i++) {
            resultsContainer.innerHTML += `<a href="detail.html"?id="" class="item">${i}</a>`;
        }

    }, 2000);

};

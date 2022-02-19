const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");


function checkLenght (value, len){
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function buttonTry() {

    if (checkLenght(firstName.value, 1) && checkLenght(lastName.value, 4) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        
        message.innerHTML = "";
        button.disabled = true;
    }
}

buttonTry()

firstName.addEventListener("keyup", buttonTry);
lastName.addEventListener("keyup", buttonTry);
email.addEventListener("keyup", buttonTry);

function sendForm(event) {
    event.preventDefault();

    message.innerHTML = '<div class="message">Your message has been sent</div>';
    
    form.reset();
}

form.addEventListener("submit", sendForm);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
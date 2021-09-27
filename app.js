const text = document.querySelector(".headline");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" +  splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(runGradient, 50);

function runGradient() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('gradient');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
    span.classList.remove('gradient');
}
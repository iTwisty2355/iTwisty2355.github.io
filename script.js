const messages = [
   "Estas segura?",
    "Muy segura??",
    "Ay no niña di que si JASKJAS",
    "porfa andale...",
    "¡Piénsalo!",
    "Si dices que no, estaré muy triste...",
    "Estaré muy triste...",
    "Estaré muy muy muy triste...",
    "Ok bien,entonces dejare de preguntar...",
    "Es broma, ¡di que sí por favor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "ivanpagina.html";
}
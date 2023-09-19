const diceContainer = document.getElementById('diceContainer');
const heading = document.querySelector(".heading");
const advice = document.querySelector(".advice-text");

diceContainer.addEventListener("click", function () {
    diceImg.src = "./assets/icons/dice-icon-active-state.svg";
    diceContainer.style.marginTop = "-5rem";
    generateAdvice();
});


async function generateAdvice() {
    const response = await fetch(
        "https://api.adviceslip.com/advice")

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    heading.textContent = `ADVICE #${data.slip.id}`;
    advice.textContent = data.slip.advice;
};



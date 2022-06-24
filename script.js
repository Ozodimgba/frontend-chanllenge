const number = document.getElementById('number');
const advice = document.getElementById('advice');

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        number.textContent = `Advice #${data.slip.id}`;
        advice.textContent = data.slip.advice;
    })
    .catch(error => {
        number.textContent = "";
        advice.textContent = `Sorry, ${error.message}`;
    })

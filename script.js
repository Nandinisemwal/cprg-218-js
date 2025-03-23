//Starting JS//
document.addEventListener("DOMContentLoaded", function () {
    fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`) //request jokes from jokeapi//
    .then(response => response.json())
    .then(data => {
        const jokeElement = document.getElementById('joke');
        const titleElement = document.getElementById('title');

        jokeElement.textContent = data.type === 'single' ? data.joke: `${data.setup} ... ${data.delivert}`;
        titleElement.textContent = "JOKE OF THE DAY";
    })
})
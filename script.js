//Starting JS//
document.addEventListener("DOMContentLoaded", function () {
    fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`) //request jokes from jokeapi//
    .then(response => response.json())
    .then(data => {
        const jokeElement = document.getElementById('joke');
        const titleElement = document.getElementById('title');

        jokeElement.textContent = data.type === 'single' ? data.joke: `${data.setup} ... ${data.delivery}`;
        titleElement.textContent = "JOKE OF THE DAY";
    })
})
//finished the title part//
//start working on category part//
function getJokeByCategory(category) {
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then(response => response.json())
    .then(data => {
        const jokeElement = document.getElementById('joke');
        const titleElement = document.getElementById('title');

        jokeElement.textContent = data.type === 'single' ? data.joke: `${data.setup} ... ${data.delivery}`;
        //to display title as the joke category expect for pun//
        if (data.category == `Pun`) {
            titleElement.textContent = `A Random Pun`;
            document.title = `A Random Pun`;
        } else {
            titleElement.textContent = `A Random ${data.category} Joke`;
            document.title = `A Random ${data.category} Joke`;
        }
    })
}
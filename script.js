//Starting Javascript//
fetch(`
    https://v2.jokeapi.dev/joke/Any?safe-mode
`)
//request jokes from jokeapi//

.then(response => response.json()) //convert to json//
.then(data => {
    joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
})

function getJokeByCategory(category) {
    fetch(`https://v2.jokeapi.dev/joke/Category?safe-mode`) //to get jokes from a specific category//
    .then(response => response.json())
    .then(data => {
        const jokeElement = document.getElementById('joke'); //using document.getElementById to get jokes by its ids//
        const titleElement = document.getElementById('title'); 
    })
}

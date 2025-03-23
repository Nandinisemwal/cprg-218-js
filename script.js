//Starting Javascript//
fetch(`
    https://v2.jokeapi.dev/joke/Any?safe-mode
`)
//request jokes from jokeapi//

.then(response => response.json()) //convert to json//
.then(data => {
    joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
})
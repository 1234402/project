let button = document.getElementById("click-btn");
let jokeDiv = document.getElementById("joke-div")


button.onclick = function(event) {
    event.preventDefault();
    
    const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode=";

    fetch(URL)
    .then(function(response) {
        console.log(response);
        return response.json()
    })
    .then(function(jokeJSON) {
   console.log(jokeJSON)
      

        let jokeContainer = document.createElement("div");
        jokeDiv.appendChild(jokeContainer);

        let joke = document.createElement("p");
        joke.innerHTML = jokeJSON.joke
        jokeContainer.appendChild(joke);

    })
    
}

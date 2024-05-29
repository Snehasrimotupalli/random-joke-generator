let button = document.getElementById("jokeBtn");
let text = document.getElementById("jokeText");

function generate_randomjoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();

        })
        .then(function(jsondata) {
           
            text.textContent = jsondata.value;
        });
}
button.addEventListener("click", generate_randomjoke);
const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getjoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokecontainer.textContent = `${item.joke}`;
    });
}

document.getElementById("btn").addEventListener("click",getjoke);

getjoke();
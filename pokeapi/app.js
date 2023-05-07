//lancer une requette dés que l'on clique sur le boutton (<div id="button">Get other pokemon.!</div>)
let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changepokemon = async() => {
    //appele vers l'API
    let randomNumber = Math.ceil(Math.random() * 150) + 1; // nombre compris entre 1 et 151
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);
    console.log(data);

    let response = await data.json();
    console.log(response);

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `${response.id}`;
    pokeName.textContent = response.name;
};
//écouter l'événement clic et appeler la fuction change pokemon (creons cette fontion à la ligne 3)
button.addEventListener("click", changepokemon);
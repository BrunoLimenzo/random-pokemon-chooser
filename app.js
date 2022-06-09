const body = document.querySelector("body");

const fetchPokemon = (pokemonId) =>{
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(getPokemonUrl(pokemonId)).then(response => response.json()).then(data =>{
        createCard(data.name, data.id);
    })
}

function createCard(name, id){
    const newId = checkId(id);
    console.log(newId);

    const pokeball = document.querySelector("#pokeball");
    pokeball.setAttribute('class','hide');

    const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/` + newId + ".png";
    console.log(imgSrc);

    const card = document.createElement("div");
    const image = document.createElement("img");
    image.setAttribute("src",imgSrc);
    const h2 = document.createElement("h2");
    h2.innerHTML = name;
    card.setAttribute("id","card");

    card.append(image, h2);
    body.append(card);
}

function checkId(id){
    if(id < 100 && id > 10){
        return "0" + id;
    }
    if(id < 10){
        return "00"+ id;
    }

    return id;
}
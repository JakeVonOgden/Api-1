const poke_wrapper = document.getElementById('poke_wrapper');
const poke_wrapper2 = document.getElementById('poke_wrapper2');
const poke_wrapper3 = document.getElementById('poke_wrapper3');

const btnFetch = document.getElementById("buttonFetch");
const btnFetch2 = document.getElementById("buttonFetch2");
const btnFetch3 = document.getElementById("buttonFetch3");

btnFetch2.style.display = 'none';
btnFetch3.style.display = 'none';

const fetchBasePokemon = async () => {
    btnFetch.style.display = 'none';
    btnFetch2.style.display = 'block';
    for(let i=1; i<=150; i++){
        if(i === 1 || i === 4 || i === 7)
        await getPokemonName(i);
      }
}

const fetchFirstEvo = async () => {
    btnFetch2.style.display = 'none';
    btnFetch3.style.display = 'block';
    for(let i=1; i<=150; i++){
        if(i === 2 || i === 5 || i === 8)
        await getPokemonName(i);
    }
}

const fetchFinalEvo = async () => {
    btnFetch3.style.display = 'none';
    for(let i=1; i<=150; i++){
        if(i === 3 || i === 6 || i === 9)
        await getPokemonName(i);
    }
}

const getPokemonName = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon)
    displayPokemonName(pokemon);
}


function displayPokemonName(pokemon) {
    const pokemonEl = document.createElement('div');
    const pokemonEl2 = document.createElement('p');
    const pokePic = document.createElement('img');

    const pokemonEvo1 = document.createElement('div');
    const pokemonEvo2 = document.createElement('p');
    const pokeEvo1Pic = document.createElement('img');
    
    const pokemonFinalEvo = document.createElement('div');
    const pokemonFinalEvo2 = document.createElement('p');
    const pokeFinalEvoPic = document.createElement('img');
    
    pokemonEl.classList.add('pokemon');
    pokemonEl2.classList.add('pokemon-type');
    pokemonEvo1.classList.add('pokemon');
    pokemonEvo2.classList.add('pokemon-type');
    pokemonFinalEvo.classList.add('pokemon');
    pokemonFinalEvo2.classList.add('pokemon-type');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
    
    pokemonEl.innerText = name;
    pokemonEl2.innerText =  type;
    pokePic.src = pokemon.sprites.front_default;

    pokemonEvo1.innerText = name;
    pokemonEvo2.innerText =  type;
    pokeEvo1Pic.src = pokemon.sprites.front_default;

    pokemonFinalEvo.innerText = name;
    pokemonFinalEvo2.innerText =  type;
    pokeFinalEvoPic.src = pokemon.sprites.front_default;
    
    if(btnFetch.style.display === 'none') {
        poke_wrapper.appendChild(pokemonEl);
        poke_wrapper.appendChild(pokemonEl2);
        poke_wrapper.appendChild(pokePic);
    } 
    if (btnFetch2.style.display === 'none' && btnFetch.style.display === 'none') {
        poke_wrapper.style.display = 'none';
        poke_wrapper2.appendChild(pokemonEvo1);
        poke_wrapper2.appendChild(pokemonEvo2);
        poke_wrapper2.appendChild(pokeEvo1Pic);
    }
    if(btnFetch3.style.display === 'none' && btnFetch.style.display === 'none' && btnFetch2.style.display === 'none') {
        poke_wrapper.style.display = 'none';
        poke_wrapper2.style.display = 'none';
        poke_wrapper3.appendChild(pokemonFinalEvo);
        poke_wrapper3.appendChild(pokemonFinalEvo2);
        poke_wrapper3.appendChild(pokeFinalEvoPic);
    }
    if (type === "Grass"){
        pokemonEl2.style.color = 'lawngreen';
        pokemonEl.style.color = 'lawngreen'
        pokemonEl.style.textDecorationColor = 'lawngreen'
        pokemonEvo2.style.color = 'lawngreen';
        pokemonEvo1.style.color = 'lawngreen'
        pokemonEvo1.style.textDecorationColor = 'lawngreen'
        pokemonFinalEvo2.style.color = 'lawngreen';
        pokemonFinalEvo.style.color = 'lawngreen'
        pokemonFinalEvo.style.textDecorationColor = 'lawngreen'
       } else if (type === "Fire"){
        pokemonEl2.style.color = 'crimson'
        pokemonEl.style.color = 'crimson'
        pokemonEl.style.textDecorationColor = 'crimson'
        pokemonEvo2.style.color = 'crimson'
        pokemonEvo1.style.color = 'crimson'
        pokemonEvo1.style.textDecorationColor = 'crimson'
        pokemonFinalEvo2.style.color = 'crimson'
        pokemonFinalEvo.style.color = 'crimson'
        pokemonFinalEvo.style.textDecorationColor = 'crimson'
    } else {
        pokemonEl2.style.color = 'deepskyblue'
        pokemonEl.style.color = 'deepskyblue'
        pokemonEl.style.textDecorationColor = 'deepskyblue'
        pokemonEvo2.style.color = 'deepskyblue'
        pokemonEvo1.style.color = 'deepskyblue'
        pokemonEvo1.style.textDecorationColor = 'deepskyblue'
        pokemonFinalEvo2.style.color = 'deepskyblue'
        pokemonFinalEvo.style.color = 'deepskyblue'
        pokemonFinalEvo.style.textDecorationColor = 'deepskyblue'
    }
}

btnFetch.addEventListener('click', fetchBasePokemon);
btnFetch2.addEventListener('click', fetchFirstEvo);
btnFetch3.addEventListener('click', fetchFinalEvo);
const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const spriteContainer = document.getElementById('sprite-container');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const button = document.getElementById('search-button');
const lines = document.querySelectorAll('tr:nth-child(even)');
lines.forEach(line => {
    line.style.backgroundColor = '#feac32';

    
});


const resetView =()=>{
    pokemonID.innerText=``
    pokemonName.innerText =``
    types.innerText=``
    height.innerText=``;
    weight.innerText=``;
    hp.innerText=``;
    attack.innerText=``;
    defense.innerText=``;
    specialAttack.innerText=``;
    specialDefense.innerText=``;
    speed.innerText=``;
    spriteContainer.innerHTML=``;
    types.innerHTML=``;
    button.classList =`electric`;
    lines.forEach(line => {
        line.style.backgroundColor = '#feac32';
    });
}
const findPokemon = async ()=>{
 try{ 
    resetView();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`);
    const data = await response.json()
    pokemonID.innerText=`#${data.id}`
    pokemonName.innerText =`${data.name}`
    console.log(data.types)
    for (const element of data.types){
        console.log(element.type.name)
        types.innerHTML +=`<span class="type ${element.type.name}">${element.type.name.toUpperCase()}</span> `}
    height.innerText=`Height: ${data.height}`;
    weight.innerText=`Weight: ${data.weight}`;
    hp.innerText=`${data.stats[0].base_stat}`;
    attack.innerText=`${data.stats[1].base_stat}`;
    defense.innerText=`${data.stats[2].base_stat}`;
    specialAttack.innerText=`${data.stats[3].base_stat}`;
    specialDefense.innerText=`${data.stats[4].base_stat}`;
    speed.innerText=`${data.stats[5].base_stat}`;
    spriteContainer.innerHTML=`<img src="${data.sprites.front_default}" id="sprite">`;
    console.log(data.types[0].type.name)
    button.classList.add( `${data.types[0].type.name}`);
    lines.forEach(line => {
        line.style.backgroundColor = '';
        line.classList.add(data.types[0].type.name);
        
    });




  }
  catch (err) {
    resetView();
    alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
  }
};
button.addEventListener('click',findPokemon)

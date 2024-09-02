/**
 * @module fetchPokemon
 */

/**
 * Affiche le nom d'un pokémon choisi aléatoirement
 * @async
 * @function fetchPokemon
 */
const fetchPokemon = async () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeAbilityBtn = document.getElementById("ability");
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = "";
  let jsonPokemon = "";
  const pokeInfo = {};

  try {
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundPokemon) {
    try {
      jsonPokemon = await foundPokemon.json();
      pokeInfo.name = `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    pokeInfo.name = "No Pokémon found...";
  }

  if (pokeP.innerText !== "") {
    pokeP.innerText = "";
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute("disabled");
};

export { fetchPokemon };

/**
 * Définit les actions à effectuer une fois le document HTML complètement chargé
 * @listens document#Event Écoute sur l'événement 'DOMContentLoaded'
 */
window.addEventListener("DOMContentLoaded", () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeAbilityBtn = document.getElementById("ability");
  const sendButton = document.getElementById("sendButton");

  /**
   * Affiche le commentaire préalablement renseigné par l'utilisateur
   * @function displayComment
   * @param {SubmitEvent} event Instance de SubmitEvent
   */
  const displayComment = (event) => {
    const comment = document.getElementById("myComment");
    event.preventDefault();
    comment.style.visibility = "visible";
    $("#message").text($("#messageInput").val());
  };

  /**
   * Affiche le nom d'un pokémon choisi aléatoirement
   * @async
   * @function fetchPokemon
   */
  const fetchPokemon = async () => {
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

  /**
   * Affiche une compétence choisie aléatoirement
   * @async
   * @function fetchPokemonAbilities
   */
  const fetchPokemonAbilities = async () => {
    const pokedexNum = Math.floor(Math.random() * 266);
    let foundAbilities = "";
    const pokeAbility = document.getElementById("pokeAbility");
    let jsonAbilities = {};
    let abilityToDisplay = "";

    try {
      foundAbilities = await fetch(
        `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundAbilities) {
      try {
        jsonAbilities = await foundAbilities.json();
        if ("" !== jsonAbilities.name && undefined !== jsonAbilities.name) {
          abilityToDisplay = `${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`;
        } else {
          abilityToDisplay = "Tackle";
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      abilityToDisplay = "No ability found...";
    }

    if (pokeAbility.innerText !== "") {
      pokeAbility.innerText = "";
    }

    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };

  /**
   * Définit l'action à exécuter au clic sur le bouton 'Choose a Pokémon' et modifie la position du paragraphe contenant le nom du pokémon
   * @function invoquePokemon
   */
  const invoquePokemon = () => {
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Définit l'action à exécuter au clic sur le bouton 'Give it a battle ability' et modifie la position du paragraphe contenant les compétences du pokémon
   * @function pokemonAbility
   */
  const pokemonAbility = () => {
    const pokeAbility = document.getElementById("pokeAbility");
    pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbility);
  };

  /**
   * Exécutée automatiquement (IIFE) au chargement du fichier. Appelle les fonctions {@link invoquePokemon} et {@link pokemonAbility} et définit l'action à exécuter au clic sur 'Send'
   * @function startAll
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
    sendButton.addEventListener("click", displayComment);
  })();
});

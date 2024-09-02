import { fetchPokemon } from "./fetchPokemon.mjs";
import { fetchPokemonAbilities } from "./fetchPokemonAbilities.mjs";

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

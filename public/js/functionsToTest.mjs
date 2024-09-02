/**
 * @module functionsToTest
 */

/**
 * Place les arguments dans un objet avec pour clé la position de l'argument dans la liste des arguments
 * @function returnAnObject
 * @param {...*} args Arguments passés à la fonction
 * @returns {Object<*>|String} Un objet contenant les paramètres passés en argument ou un message d'information en cas d'absence d'arguments
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};

/**
 * Multiplie par 2 tous les nombres contenus dans le tableau passé en argument
 * @function multiplyAllByTwo
 * @param {number[]} arrayOfNumbers Un tableau de nombres
 * @returns {number[]|string} Un tableau de nombres ou un message d'information si l'argument fourni est incorrect
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new Array().constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
    console.log("arrayTimesTwo: ", response);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};
export { returnAnObject, multiplyAllByTwo };

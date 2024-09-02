import {
  returnAnObject,
  multiplyAllByTwo,
} from "../public/js/functionsToTest.mjs";

describe("** Tests de la fonction 'returnAnObject' **", () => {
  test("Doit retourner un objet contenant les arguments passés en paramètres; ces arguments sont indexés par leurs positions dans la liste d'arguments", () => {
    expect(
      returnAnObject("coucou", true, [5, false, { c: null }], { k: 37.2 }),
    ).toStrictEqual({
      0: "coucou",
      1: true,
      2: [5, false, { c: null }],
      3: { k: 37.2 },
    });
  });

  test("Doit retourner la chaîne de caractères 'No argument was given to the function.' si aucun argument n'est fourni", () => {
    expect(returnAnObject()).toBe("No argument was given to the function.");
  });
});

describe("** Tests de la fonction multiplyAllByTwo **", () => {
  test("Doit retourner un tableau où tous les paramètres de type 'number' sont multipliés par 2", () => {
    expect(multiplyAllByTwo([7, 8, 9, 10])).toStrictEqual([14, 16, 18, 20]);
  });

  test("Doit retourner la chaîne de caractères 'The argument is not an Array of numbers' si l'argument d'entrée n'est pas un tableau", () => {
    expect(multiplyAllByTwo(true)).toBe(
      "The argument is not an Array of numbers",
    );
  });
});

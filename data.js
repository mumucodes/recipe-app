//data modeling

export const recipe = [{
    id: 1,
    title: 'Cheesy Pork Chorizo Enchiladas',
    servings: 2,
    cookTime: '30 min',
    ingredients: [{
        item: 'pork',
        amount: 10,
        measurement: 'cup',
    }],

    instructions: [
                ['cook the rice',
                'place an oven rack in the center of the oven: preheat to 450 F',
                'In a small pot combine the rice, a pinch of salt, and 1 cup of water. Heat to boiling on high.', 
                'Once boiling, reduce the heat to lot. Cover and cook, without stirring, or until the water has been absorbed and the rice is tender.', 
                'Turn off the heat and fluff with a fork.', 
                'Transfer to a large bowl.'],
                ['prepare the ingredients',
                'Meanwhile, wash and dry the pepper: cut off and discard the stem. Halve lengthwise; remove the ribs and seeds, then cut crosswise into 1/2 in pieces',
                'Grate the cheese on the large side of a grater box.'],
                ['In a medium pan heat 2 tsp of olive oil on medium-high until hot.',
                'Add the chorizo.  Cook, stirring frequently and breaking the meat apart with a spoon for 3 minutes, or until lightly browned',
                'Add the pieces of pepper; season with salt and pepper. Cook stirring frequently another 2 to 3 minutes or until thoroughly combined.',
                'Add .25 cups of water and cook stirring frequently another 1 to 2 minutes or until the sauce is thickened and the chorizo is thoroughly cooked Turn off the heat.',
                'Transfer to the cooked rice, stir in half the sour cream and season to taste with salt and pepper.'],
                ['Assemble & bake the enchiladas',
                'Place the tortillas on a work surface  Spread out about 1 cup of the filling into the bottom surface of a baking dish.',
                'Divide the remaining filling among the tortillas.  Tightly roll up each tortilla around the filling.',
                'Transfer to the baking dish seam side down. Evenly top with the grated cheese.',
                'Bake 7 to 9 minutes, or until lightly browned and the cheese is melted',
                'Remove from the oven and let stand at east 2 minutes before serving.'],
                ['season the sour cream & serve your dish',
                'Meanwhile, season the remaining sour cream with salt and pepper.',
                'Serve the baked enchiladas garnished with the seasoned sour cream.',
                'Enjoy!']
                ],
}],


import "./styles.css";

export const recipe = {
  id: 1,
  title: "Cheesy Pork Chorizo Enchiladas",
  servings: 2,
  cookTime: "30 min",
  ingredients: [
    {
      title: "pork",
      amount: 10,
      measurement: "cup"
    }
  ],

  instructions: [
    [
      "cook the rice",
      "place an oven rack in the center of the oven: preheat to 450 F",
      "In a small pot combine the rice, a pinch of salt, and 1 cup of water. Heat to boiling on high."
    ],
    [
      "cook the rice",
      "place an oven rack in the center of the oven: preheat to 450 F",
      "In a small pot combine the rice, a pinch of salt, and 1 cup of water. Heat to boiling on high."
    ],
    [
      "cook the rice",
      "place an oven rack in the center of the oven: preheat to 450 F",
      "In a small pot combine the rice, a pinch of salt, and 1 cup of water. Heat to boiling on high."
    ],
    [
      "cook the rice",
      "place an oven rack in the center of the oven: preheat to 450 F",
      "In a small pot combine the rice, a pinch of salt, and 1 cup of water. Heat to boiling on high."
    ]
  ]
};

function assembleInstructions(recipe) {
  const instructions = recipe.instructions.map((instruction, index) => {
    return `<li><h2>Step ${index + 1}</h2><ul>${instruction
      .map((subinstruction) => `<li>${subinstruction}</li>`)
      .join("")}</ul></li>`;
  });

  return `<h1>Instructions</h1><ul>${instructions.join("")}</ul>`;
}

function formatInstrctions(recipe) {
  return recipe.instructions
    .map((instruction, index) => {
      return `<li>
        <h2>Step ${index + 1}</h2>
        <ul></ul>
      </li>`;
    })
    .join("");
}

document.getElementById("app").innerHTML = `
  <h1>Instructions</h1>
  <ul>${formatInstrctions(recipe)}</ul>
`;

export async function getDataList(searchBy, searchText) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchBy}=${searchText}`
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.log("err", err);
  }
}

export const ingredientsGenerator = (drink) => {
  let ingredientsArr = [
    { ingredient: drink.strIngredient1, measure: drink.strMeasure1 },
    { ingredient: drink.strIngredient2, measure: drink.strMeasure2 },
    { ingredient: drink.strIngredient3, measure: drink.strMeasure3 },
    { ingredient: drink.strIngredient4, measure: drink.strMeasure4 },
    { ingredient: drink.strIngredient5, measure: drink.strMeasure5 },
    { ingredient: drink.strIngredient6, measure: drink.strMeasure6 },
    { ingredient: drink.strIngredient7, measure: drink.strMeasure7 },
    { ingredient: drink.strIngredient8, measure: drink.strMeasure8 },
    { ingredient: drink.strIngredient9, measure: drink.strMeasure9 },
    { ingredient: drink.strIngredient10, measure: drink.strMeasure10 },
    { ingredient: drink.strIngredient11, measure: drink.strMeasure11 },
    { ingredient: drink.strIngredient12, measure: drink.strMeasure12 },
    { ingredient: drink.strIngredient13, measure: drink.strMeasure13 },
    { ingredient: drink.strIngredient14, measure: drink.strMeasure14 },
    { ingredient: drink.strIngredient15, measure: drink.strMeasure15 },
  ];

  let preFinalIngredientsArr = ingredientsArr.filter((item) => item.ingredient);
  let finalIngredientsArr = preFinalIngredientsArr.map((item) => {
    if (item.measure === null || item.measure === "") {
      return { ingredient: item.ingredient, measure: "(as preferred)" };
    } else {
      return item;
    }
  });

  return finalIngredientsArr;

  /*  ingredientsArr.forEach(item => {
      if (item !== null && item !== "") finalIngredientsArr.push(" " + item);
    }) */
};

export const saveToFavorite = (drink) => {
  let drinks = JSON.parse(localStorage.getItem("favoriteDrinks"));
  let finalDrinks = [];
  if (drinks) {
    finalDrinks = [...drinks, drink];
  } else {
    finalDrinks = [drink];
  }

  localStorage.setItem("favoriteDrinks", JSON.stringify(finalDrinks));
};

export const isInFavorite = (id) => {
  let drinks = JSON.parse(localStorage.getItem("favoriteDrinks"));
  let isFavorite = false;
  drinks.map((item) => {
    if (item.idDrink === id) {
      isFavorite = true;
    }
  });
  return isFavorite;
};

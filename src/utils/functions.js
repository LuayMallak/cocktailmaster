export async function getDataList(searchBy, searchText) {
  try {
    let data;
    if (searchBy === "i") {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${searchBy}=${searchText}`
      );
      data = await response.json();
    } else {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchBy}=${searchText}`
      );
      data = await response.json();
    }

    return data;
  } catch (err) {
    console.log("err", err);
  }
}
export async function getRandomCocktail() {
  try {
    let data;

    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    data = await response.json();

    return data;
  } catch (err) {
    console.log("err", err);
  }
}
export async function getDataByID(id) {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const singleCocktail = await response.json();

    return singleCocktail;
  } catch (err) {
    console.log("err", err);
  }
}

export function clearFavorites() {
  localStorage.removeItem("favoriteDrinks");
  this.setState({ favorites: [] });
}
export function clearRandoms() {
  this.setState({ randoms: [] });
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
};

export const isInFavorite = (array = [], id) => {
  if (!array) {
    return false;
  } else {
    return array.some((drink) => drink.idDrink === id);
  }
};

export function getDataList(searchBy, searchText) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchBy}=${searchText}`
  ).then((res) => res.json());
}

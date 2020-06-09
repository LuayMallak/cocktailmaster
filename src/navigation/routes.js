import SearchResult from "../View/SearchResult";
import Home from "../View/Home";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/search-result",
    exact: true,
    component: SearchResult,
  } /* ,
  {
    path: "/cocktail/:id",
    exact: true,
    component: Cocktail,
  }, */,
];
export default routes;

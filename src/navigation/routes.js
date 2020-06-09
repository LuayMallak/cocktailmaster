import SearchResult from "../View/SearchResult";
import Home from "../View/Home";
import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    render: (state) => <Home {...state} />,
  },
  {
    path: "/search-result",
    exact: true,
    render: (state) => <SearchResult {...state} />,
  },
];
export default routes;

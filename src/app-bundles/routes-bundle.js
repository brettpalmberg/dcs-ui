import { createRouteBundle } from "redux-bundler";
import Home from "../app-pages/home";
import Sites from "../app-pages/sites";
import Configs from "../app-pages/configs";
import Datasources from "../app-pages/datasource";

const rootURL = "https://api.github.com/repos/brettpalmberg/edit-db/contents";

export default createRouteBundle({
  "/": Home,
  "/sites": Sites,
  "/configs": Configs,
  "/datasources": Datasources,
});

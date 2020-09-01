import React from "react";
import { connect } from "redux-bundler-react";
import Home from "./app-pages/home";

import "./css/bootstrap/css/bootstrap-sketchy.min.css";
import "./css/mdi/css/materialdesignicons.min.css";

export default connect("selectRoute", ({ route: Route }) => <Route />);

import { composeBundles } from "redux-bundler";
// ... import other bundles
import routeBundle from "./routes-bundle";

export default composeBundles(routeBundle);

// ... add bundles here

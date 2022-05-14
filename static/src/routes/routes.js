import Home from "../pages/Home.js";
import Info from "../pages/Info.js";

const routes = {
  "/": { node: Home, routeName: "home" },
  "/info": { node: Info, routeName: "info" },
};

export default routes;

import Home from "./pages/Home.js";
import Info from "./pages/Info.js";

const routes = {
  "/": Home,
  "/info": Info,
};

const pushHistory = (pathName) => {
  history.pushState({}, pathName, location.origin + pathName);
};

const router = async (pathName, DOM) => {
  pushHistory(pathName);

  DOM.main = routes[pathName];
  await DOM.render();
};

const initRoutes = (DOM) => {
  onpopstate = async () => {
    DOM.main = routes[location.pathname];
    await DOM.render();
  };
};

export { initRoutes, router };

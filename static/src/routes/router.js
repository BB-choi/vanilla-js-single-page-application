import NotFound from "../pages/NotFound.js";
import routes from "./routes.js";

const pushHistory = (pathName) => {
  history.pushState({}, pathName, location.origin + pathName);
};

const router = async (pathName, DOM) => {
  pushHistory(pathName);

  if (!routes[location.pathname]) {
    DOM.main = NotFound;
  } else {
    DOM.main = routes[pathName];
  }

  await DOM.render();
};

const initRoutes = (DOM) => {
  onpopstate = async () => {
    DOM.main = routes[location.pathname];
    await DOM.render();
  };
};

export { initRoutes, router };

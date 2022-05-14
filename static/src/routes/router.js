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
    DOM.main = routes[pathName].node;
  }

  await DOM.render();
};

const getMainFromPath = () => {
  const { pathname } = location;

  if (!routes[pathname]) {
    return NotFound;
  }
  return routes[pathname].node;
};

const initRoutes = (DOM) => {
  DOM.main = getMainFromPath();

  onpopstate = async () => {
    DOM.main = routes[location.pathname].node;
    await DOM.render();
  };
};

export { initRoutes, router };

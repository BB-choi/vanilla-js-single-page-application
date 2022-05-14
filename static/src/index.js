import utils from "./utils/utils.js";

import routes from "./routes/routes.js";
import { initRoutes } from "./routes/router.js";

import NavBar from "./pages/NavBar.js";
import NotFound from "./pages/NotFound.js";

const { $ } = utils.DOM;

const getMainFromPath = () => {
  const { pathname } = location;

  if (!routes[pathname]) {
    return NotFound;
  }
  return routes[pathname].node;
};

const MyDOM = {
  root: $("#root"),
  main: getMainFromPath(),
  async render() {
    this.root.innerHTML = await NavBar.render();
    this.root.innerHTML += await this.main.render();

    await this.after_render();
  },
  async after_render() {
    await NavBar.after_render(this);
  },
};

await MyDOM.render();
initRoutes(MyDOM);

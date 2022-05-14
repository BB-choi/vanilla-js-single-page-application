import utils from "./utils/utils.js";
import NavBar from "./pages/NavBar.js";
import Home from "./pages/Home.js";
import { initRoutes } from "./router.js";

const { $ } = utils.DOM;

const MyDOM = {
  root: $("#root"),
  main: Home,
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

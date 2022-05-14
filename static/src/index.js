import utils from "./utils/utils.js";
import { initRoutes } from "./routes/router.js";
import NavBar from "./pages/NavBar.js";

const { $ } = utils.DOM;

const MyDOM = {
  root: $("#root"),
  async render() {
    this.root.innerHTML = await NavBar.render();
    this.root.innerHTML += await this.main.render();

    await this.after_render();
  },
  async after_render() {
    await NavBar.after_render(this);
  },
};

initRoutes(MyDOM);
await MyDOM.render();

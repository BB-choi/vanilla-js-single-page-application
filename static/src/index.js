import utils from "./utils/utils.js";
import NavBar from "./pages/NavBar.js";
import Home from "./pages/Home.js";

const { $ } = utils.DOM;

const main = Home;

const MyDOM = {
  root: $("#root"),
  async render() {
    this.root.innerHTML += await NavBar.render();
    this.root.innerHTML += await main.render();
    await NavBar.after_render();
  },
};

MyDOM.render();

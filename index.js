import Layout from "./pages/Layout.js";
import utils from "./utils/utils.js";

const { $ } = utils.DOM;

const MyDOM = {
  root: $("#root"),
  async render(element) {
    this.root.appendChild(await element.render());
  },
};

MyDOM.render(Layout);

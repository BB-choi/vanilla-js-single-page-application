import utils from "./utils/utils.js";
import Layout from "./pages/Layout.js";

const { $ } = utils.DOM;

const MyDOM = {
  root: $("#root"),
  async render(element) {
    this.root.appendChild(await element.render());
  },
};

MyDOM.render(Layout);

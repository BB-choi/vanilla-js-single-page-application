import { router } from "../router.js";
import utils from "../utils/utils.js";

const { $ } = utils.DOM;

const Navbar = {
  async render() {
    return `
    <nav>
      <a href="/" data-link>Home</a>
      <a href="/info" data-link>Info</a>
    </nav>
    `;
  },

  async after_render(DOM) {
    $("nav").addEventListener("click", (e) => {
      this.handleClickNav(e, DOM);
    });
  },

  handleClickNav(e, DOM) {
    if (!e.target.dataset.hasOwnProperty("link")) {
      return;
    }

    e.preventDefault();
    const pathName = e.target.getAttribute("href");
    router(pathName, DOM);
  },
};

export default Navbar;

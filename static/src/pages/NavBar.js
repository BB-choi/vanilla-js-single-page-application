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
  async after_render() {
    $("nav").addEventListener("click", (e) => {
      e.preventDefault();
    });
  },
};

export default Navbar;

import { router } from "../routes/router.js";
import routes from "../routes/routes.js";
import utils from "../utils/utils.js";

const { $ } = utils.DOM;

const getNavItems = () => {
  const routesArray = Object.entries(routes);
  return routesArray.reduce(
    (prev, [path, { routeName }]) =>
      `${prev} <a href=${path} data-link>${routeName}</a>`,
    ""
  );
};

const Navbar = {
  async render() {
    const navItems = getNavItems();
    const navbarTemplate = `<nav>${navItems}</nav>`;

    return navbarTemplate;
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

import Navbar from "./NavBar.js";
import Home from "../components/Home.js";

const Layout = {
  wrap: document.createElement("div"),
  innerPages: [Navbar, Home],
  async render() {
    for (const page of this.innerPages) {
      this.wrap.innerHTML += await page.render();
    }

    return this.wrap;
  },
};

export default Layout;

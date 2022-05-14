const Navbar = {
  async render() {
    return `
    <nav>
      <a href="/" data-link>Home</a>
      <a href="/info" data-link>Info</a>
    </nav>
    `;
  },
};

export default Navbar;

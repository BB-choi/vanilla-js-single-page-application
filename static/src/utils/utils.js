const $ = (selector, node = document) => node.querySelector(selector);
const $$ = (selector, node = document) => node.querySelectorAll(selector);

const utils = {
  DOM: {
    $,
    $$,
  },
};

export default utils;

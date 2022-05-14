const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const utils = {
  DOM: {
    $,
    $$,
  },
};

export default utils;

'use strict';

const views = (function views() {
  return {
    Intent: {
      Launch: {
        ask: 'Willkommen! Was möchtest du tun?',
      },
      Help: {
        say: 'Some help text here.',
      },
      StartCooking: {
        tell: 'Ok, lass uns kochen.',
      }
    },
  };
}());
module.exports = views;

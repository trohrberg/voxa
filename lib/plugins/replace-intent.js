'use strict';

const _ = require('lodash');

const defaultConfig = {
  regex: /(.*)OnlyIntent$/,
  replace: '$1Intent',
};

function register(skill, config) {
  skill.onIntentRequest((request) => {
    const pluginConfig = _.merge(defaultConfig, config);
    request.intent.name = request.intent.name.replace(pluginConfig.regex, pluginConfig.replace);
  });
}
module.exports = register;
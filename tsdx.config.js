const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [
          {
            src: 'global.css',
            dest: 'dist',
            rename: 'global.css',
          },
        ],
      })
    );
    return config;
  },
};

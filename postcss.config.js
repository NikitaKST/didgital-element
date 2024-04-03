// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        'last 4 versions',
        '> 1%',
        'Firefox ESR',
      ],
    }),
  ],
};

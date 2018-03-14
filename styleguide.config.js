const path = require('path');

module.exports = {
  require: [
    path.join(__dirname, 'src/index.css'),
  ],
  sections: [
    {
      name: 'UI:',
      components: 'src/components/ui/**/*/*.js',
    },
    {
      name: 'Documentation:',
      components: 'src/documentation/**/*.js',
    },
    {
      name: "Design",
      content: "src/documentation/design.md",
    },
  ],
  ignore: ['**/*.test.js'],
  template: "src/documentation/styleguide.html",
  theme: {
    fontFamily: {
      base: '"Ubuntu", sans-serif',
    },
  },
  showUsage: false,
};

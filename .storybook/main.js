module.exports = {
  stories: [
    '../src/Intro.stories.mdx',
    {
      // 👇 The directory field sets the directory your stories
      directory: '../stories/atoms',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'Atoms',
      // 👇 Storybook will load all files that contain the stories extensio
      files: '*.stories.@(ts|tsx|js|jsx)',
    },
    {
      // 👇 The directory field sets the directory your stories
      directory: '../stories/molecules',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'Molecules',
      // 👇 Storybook will load all files that contain the stories extensio
      files: '*.stories.@(ts|tsx|js|jsx)',
    },
    {
      // 👇 The directory field sets the directory your stories
      directory: '../stories/overview',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'Overview',
      // 👇 Storybook will load all files that contain the stories extensio
      files: '*.stories.@(ts|tsx|js|jsx)',
    },
    '../stories/**/*.stories.@(mdx)',
  ],
  staticDirs: ['../ressources'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};

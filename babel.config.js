module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src/',
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@screens': './src/screens/',
          '@service': './src/service/',
        },
      },
    ],
  ],
};
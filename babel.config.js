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
          '@Assets': './src/Assets/',
          '@Components': './src/Components/',
          '@Screens': './src/Screens/',
          '@Service': './src/Service/',
          '@Config': './src/Config',
        },
      },
    ],
  ],
};
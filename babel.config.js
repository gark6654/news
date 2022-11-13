module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        '@assets': './src/assets',
        '@constants': './src/constants',
        '@components': './src/components',
        '@store': './src/store',
        '@services': './src/services',
        '@pages': './src/pages',
        '@utils': './src/utils',
        '@hooks': './src/hooks',
        '@types': './src/constants/types',
      },
    }],
    ['module:react-native-dotenv', {
      'moduleName': '@env',
      'path': '.env',
      'blacklist': null,
      'whitelist': null,
      'safe': false,
      'allowUndefined': true,
    }],
  ],
};

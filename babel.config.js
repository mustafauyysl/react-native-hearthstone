module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@config': './src/config/',
          '@hocs': './src/hocs/',
          '@router': './src/router/',
          '@state': './src/state/',
          '@utils': './src/utils/',
          '@views': './src/views/',
          '@services': './src/services/',
          '@icons': './src/assets/svg/',
          '@theme': './src/theme/',
          '@screens': './src/screens/',
          '@constants': './src/constants/'
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};

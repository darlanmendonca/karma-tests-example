'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: [
      'jasmine',
    ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
    ],

    files: [
      'src/vendors.js',
      'src/app.js',
      'src/**/*.js',
      'test/**/*.spec.js',
    ],

    exclude: [],

    port: 9876,

    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    singleRun: true,
  });
}

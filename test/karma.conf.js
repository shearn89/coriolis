// Karma configuration
// Generated on Thu Jun 11 2015 19:39:40 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      '../build/lib*.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../build/app*.js',
      'tests/**/*.js'
    ],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};

var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/js/app.js')
  .addEntry('./pages/page1', './assets/js/pages/page1.js')
  .addEntry('./pages/page2', './assets/js/pages/page2.js')
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(false)
  .enableVersioning(Encore.isProduction())
  .configureBabel(() => {}, {
    useBuiltIns: 'usage',
    corejs: 3
  })
;

module.exports = Encore.getWebpackConfig();
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  legacyFilesToAppend: [
    'jquery.js',
    'handlebars.js',
    'ember.js',
    'ic-ajax/dist/named-amd/main.js',
    'ember-data.js',
    'app-shims.js',
    'ember-resolver.js',
    'ember-load-initializers.js'
  ],

  // AKA whitelisted modules
  ignoredModules: [
    'ember',
    'ember/resolver',
    'ember/load-initializers',
    'ic-ajax'
  ],

  // hack we can hopefully remove as the addon system improves
  importWhitelist: {
    'ember': ['default'],
    'ember/resolver': ['default'],
    'ember/load-initializers': ['default']
  },

  // hack
  getEnvJSON: require('./config/environment')
});





// Import a couple of modules;
var compileSass = require('broccoli-sass');
var mergeTrees  = require('broccoli-merge-trees');

// List all of the directories containing SASS source files
var sassSources = [
  'app/styles',
  'vendor/bootstrap-sass-official/vendor/assets/stylesheets'
]

// Compile a custom sass file, with the sources that need to be included
var appCss = compileSass( sassSources , 'app.custom_scss', 'assets/app.css');

// Merge the ember app and the custom css into a single tree for export
var appAndCustomDependencies = mergeTrees([app.toTree(),appCss], {
  overwrite: true
});

// EXPORT ALL THE THINGS!
module.exports = appAndCustomDependencies;

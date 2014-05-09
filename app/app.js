import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'ember-cli-bootstrap-sass', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'ember-cli-bootstrap-sass');

export default App;

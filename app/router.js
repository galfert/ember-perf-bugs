import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('articles', function() {
    this.route('article', { path: ':article_id' });
  });

  this.route('bookmarks', function() {});
});

export default Router;

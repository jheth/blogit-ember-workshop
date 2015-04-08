import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'blogit-workshop/tests/helpers/start-app';

var application;

module('Acceptance: Posts', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentPath(), 'posts.index');

    assert.equal(find('#new-post').length, 1, "Page contains New Post button");
    assert.equal(find('.row .blog-item').length, 4, "List contains expected number of models");
  });

  visit('/post/1');

  andThen(function() {
    assert.equal(currentPath(), 'post');

    assert.equal(find('a.back').length, 1, "Back link exists");
    assert.equal(find('div.main h2').length, 1, "Blog Title");
    assert.equal(find('div.main p').length, 1, "Blog Body");
  });
});

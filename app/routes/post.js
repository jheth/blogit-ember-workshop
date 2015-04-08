import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.id);
  },
  actions: {
    /* Handle the transition after post is deleted. */
    postDeleted: function() {
      this.transitionTo('posts');
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  },
  actions: {
    savePost: function(data) {
      var post = this.store.createRecord('post', data);
      post.save();

      // var posts = this.controllerFor('posts');
      // posts.get('model').pushObject(post);
    },
    deletePost: function(post) {
      post.set('deletedAt', Date.now());

      //var posts = this.controllerFor('posts');
      //posts.get('model').removeObject(post);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  post: null,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('post').save();
    },
    publish: function() {
      this.set('post.publishedAt', Date.now());
    },
    delete: function() {
      this.set('post.deletedAt', Date.now());
      this.sendAction('postDeleted');
    }
  }
});

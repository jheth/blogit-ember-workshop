import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addPost: function() {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };

      this.sendAction('action', params);

      /* Reset Form Fields */
      this.set('title', '');
      this.set('body', '');
    }
  }
});

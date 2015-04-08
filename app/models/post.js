import DS from 'ember-data';
import Ember from 'ember';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  body:  DS.attr('string'),
  author: DS.attr('string'),
  createdAt: DS.attr('date'),
  publishedAt: DS.attr('date'),

  isPublished: function() {
    return Ember.isPresent( this.get('publishedAt') );
  }.property('publishedAt')
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Ember.js",
      body: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      author: "Joe",
      createdAt: '2014-10-27T11:00:00'
    }, {
      id: 2,
      title: "Eiffel Tower",
      body: "This has information about the Eiffel Tower",
      author: "Tom",
      createdAt: '2014-10-27T12:54:01'
    }, {
      id: 3,
      title: "The Tomster",
      body: "Is it a Hamster or a Person. It's hard to tell sometimes.",
      author: "Yehuda",
      createdAt: '2014-10-27T12:54:01'
    }, {
      id: 4,
      title: "Hello, world!",
      body: "This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.",
      author: "Ryan",
      createdAt: Date.now()
    }
  ]
});

export default Post;

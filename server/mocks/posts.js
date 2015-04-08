module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var posts = [
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
  ];

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': posts
    });
  });

  postsRouter.post('/', function(req, res) {
    var post = req.body.post;
    post.id = (posts.length + 1);
    /* Add to posts array */
    posts.push(post);

    res.send({
      'post': post
    }).status(201);
  });

  postsRouter.get('/:id', function(req, res) {
    var id = req.params.id - 1; /* 0 based index */
    res.send({
      'post': posts[id]
    });
  });

  postsRouter.put('/:id', function(req, res) {
    var id = req.params.id - 1; /* 0 based index */
    posts[id] = req.body.post;

    res.send({
      'post': posts[id]
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};

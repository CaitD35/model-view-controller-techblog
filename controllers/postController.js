const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.render('posts', { posts });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      userId: req.session.user.id
    });
    res.redirect('/posts');
  } catch (error) {
    res.status(500).send(error);
  }
};



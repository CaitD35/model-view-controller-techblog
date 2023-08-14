const Comment = require('../models/comment');
const Post = require('../models/post');

exports.createComment = async (req, res) => {
  try {
    // Ensure the post exists
    const post = await Post.findByPk(req.body.postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    // Create the comment
    const comment = await Comment.create({
      content: req.body.content,
      userId: req.session.user.id,
      postId: req.body.postId
    });

    res.redirect(`/posts/${req.body.postId}`); // Assuming you have a route to show individual posts
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).send('Comment not found');
    }

    // Check if the user owns the comment or if they're an admin (this part is optional and requires roles)
    if (req.session.user.id !== comment.userId) {
      return res.status(403).send('Unauthorized');
    }

    await comment.destroy();

    res.redirect(`/posts/${comment.postId}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

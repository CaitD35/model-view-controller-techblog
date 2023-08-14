module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    // ... as before ...
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    });
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments'
    });
  };

  return Post;
};

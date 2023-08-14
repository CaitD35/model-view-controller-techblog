module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    // ... as before ...
  });

  Comment.associate = models => {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    });
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE' // if post is deleted, delete the comment as well.
    });
  };

  return Comment;
};

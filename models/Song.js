module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      artistId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Artists',
          key: 'id'
        }
      }
    }, {});
  
    Song.associate = (models) => {
      Song.belongsTo(models.Artist, {
        as: 'artist',
        foreignKey: 'artistId'
      });
    };
  
    return Song;
  };
  
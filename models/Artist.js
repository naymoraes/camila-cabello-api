module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
  
    Artist.associate = (models) => {
      Artist.hasMany(models.Song, {
        as: 'songs',
        foreignKey: 'artistId'
      });
    };
  
    return Artist;
  };
  
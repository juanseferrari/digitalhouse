//DataTypes es el tipo de dato que puede ser una base de datos. Lo requiero dentro de la librería de Sequelize
const { DataTypes } = require("Sequelize");

module.exports = (sequelize) => {
    //El define tiene 3 parámetros. 1. Alias. 2. Info de las bases de dato, 3. config
    const model = sequelize.define("Movie", //Este movie es el que se va a usar con el db.Movie
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        release_date: DataTypes.DATE,
        awards: DataTypes.INTEGER,
        length: DataTypes.INTEGER
        
    },{
        timestamps: false,
        tableName: "movies"
    }
    )
    // Asociaciones
    model.associate = (models) => {
        model.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"

        });
        model.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie", //La tabla intermedia
            foreignKey: "movie_id", //La llave foranea de la tabla intemedia
            otherKey: "actor_id", //
            timestamps: false //
        });

    }


    return model;
}


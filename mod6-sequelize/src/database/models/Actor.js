const { DataTypes} = require("Sequelize");

module.exports = (sequelize) => {
    //El define recibe 3 parámetros: el alias, las columnas de las DB y la configuracion. 

    const model = sequelize.define("Actor", //Este movie es el que se va a usar con el db.Movie
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        rating: DataTypes.INTEGER
       
        
    },{
        timestamps: false,
        tableName: "actors"
    }
    )
    model.associate = (models) => {
        model.belongsToMany(models.Movie, {
            as: "movies",
            through: "actor_movie", //La tabla intermedia
            foreignKey: "actor_id", //La llave foranea de la tabla intemedia
            otherKey: "movie_id", //
            timestamps: false //
        });

    }
    return model;
}


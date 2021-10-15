const { DataTypes} = require("Sequelize");

module.exports = (sequelize) => {
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
    return model;
}


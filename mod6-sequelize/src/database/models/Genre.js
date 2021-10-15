const { DataTypes} = require("Sequelize");

module.exports = (sequelize) => {
    //El define recibe 3 parámetros: el alias, las columnas de las DB y la configuracion. 

    const model = sequelize.define("Genre", //Este movie es el que se va a usar con el db.Movie
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        name: DataTypes.STRING,
        ranking: DataTypes.INTEGER,
        active: DataTypes.INTEGER
       
        
    },{
        timestamps: false,
        tableName: "genres"
    }
    )
    return model;
}


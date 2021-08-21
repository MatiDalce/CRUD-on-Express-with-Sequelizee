module.exports =  function(sequelize, DataTypes) { 


   let  alias = "Genre";

   let cols = {id:   {type: DataTypes.INTEGER,
                          primaryKey: true,
                          autoIncrement: true } ,
            name: {type: DataTypes.STRING}  };

   let config = {tableName : "genres",
                 timestamps: false};

let Genre = sequelize.define(alias, cols, config);

Genre.associate = (models) => {

  Genre.hasMany(models.Pelicula, 
    
    { as: "peliculas", 
    foreignkey: "genre_id"
  } )



}

}
module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Tasks', {
        Name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        Description:{
            type:DataTypes.TEXT,
            allowNull: true
        },
        Count:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        UnitPrice:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        Unit:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Price:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        ImageName:{
            type:DataTypes.STRING,
            allowNull:true
        },
        isDone:{
            type:DataTypes.BOOLEAN,
            allowNull:true,
            defaultValue:false
        }
    })
}
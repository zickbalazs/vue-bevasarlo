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
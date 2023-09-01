const { Sequelize } = require('sequelize')
const { DataTypes } = require('sequelize')

const sequelize = new Sequelize('empresa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})
const User = sequelize.define('listenUser', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true, // Habilita createdAt y updatedAt
});

sequelize.sync()
    .then(() => {
        console.log('Modelo sincronizado con la base de datos.');
    })
    .catch((error) => {
        console.error('Error al sincronizar el modelo con la base de datos:', error);
    });

module.exports = User
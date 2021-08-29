const Sequelize = require("sequelize")

const sequelize = new Sequelize('bd','usuario-bd','senha-do-bd', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

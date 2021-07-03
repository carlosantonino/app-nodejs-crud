const Sequelize = require("sequelize")

const sequelize = new Sequelize('node','carlos','123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
const Sequelize = require("sequelize")

const sequelize = new Sequelize('node','carlos','', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

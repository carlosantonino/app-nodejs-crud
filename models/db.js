const Sequelize = require("sequelize")

const sequelize = new Sequelize('bdnode','carlos','', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


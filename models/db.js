const Sequelize = require("sequelize")

const sequelize = new Sequelize('bdnode','carlos','C30s20#15', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

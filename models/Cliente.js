const db = require('./db')

const Cliente = db.sequelize.define('clientes', {
    nome: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    tel: {
        type: db.Sequelize.STRING
    }
})

// Cliente.sync({force: true})

module.exports = Cliente
const db = require('./db')

const Produto = db.sequelize.define('produtos', {
    descricao: {
        type: db.Sequelize.STRING
    },
    quant: {
        type: db.Sequelize.INTEGER
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

Produto.sync({force: true})
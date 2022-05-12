const db = require('./db')

const Pedido = db.sequelize.define('pedidos', {
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

// Pedido.sync({force: true})

module.exports = Pedido
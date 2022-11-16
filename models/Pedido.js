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
    },
    status: {
        type:db.Sequelize.BOOLEAN
    }
})

// Pedido.sync({force: true})

module.exports = Pedido
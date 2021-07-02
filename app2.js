// Conexão usando Siquelize
const Sequelize = require('sequelize')

const sequelize = new Sequelize('node','root',
'C30s20#15',{
    host: 'localhost',
    dialect: 'mysql'  // conecta com mysql, mariadb, postgres, mssql
})

sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso')
}).catch(function(err){
    console.log('Erro ao realizar a conexao com DB ' + err)
})

// Criar tabela com siquelize
const Fornecedor = sequelize.define('fornecedores', {
    nome: {
        type: Sequelize.STRING,
    },
    endereco: {
        type: Sequelize.STRING,
    },
    telefone: {
        type: Sequelize.STRING
    }    
})

//Fornecedor.sync({force:true})

// Fornecedor.create({
//     nome: "Mercado Livre",
//     endereco: "www.mercadolivre.com.br",
//     telefone: "99999999"
    
//  })


// O projeto na verdade começa aqui na aula 12 
// https://www.youtube.com/watch?v=kK98Qr03qNo&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=12
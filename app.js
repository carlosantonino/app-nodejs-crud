const express = require("express")

const app = express()

const mysql = require("mysql")  // requisição do mysql

const connection = mysql.createConnection({  // conexao com o banco de dados mysql
    host: 'localhost',
    user: 'root',
    password: 'C30s20#15',
    database: 'node'
})

// tratamento de erros da conexão mysql
connection.connect(function(err){
    if(err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('Conectado com sucesso ' + connection.threadId)
})
// Select 
// connection.query('SELECT * from produtos',function(err, rows,fields){
//         if(!err){
//             console.log('Resultado: ', rows)
//         } else {
//             console.log('Erro ao realizar a consulta')
//         }
//     })


// Insert


// connection.query("INSERT INTO cliente(nome, email, telefone) VALUES ('Antonio Coelho', 'antoniocoelho@gmail.com','99999999')",function(err, Result){
//     if(!err) {
//         console.log('Usuario cadastrado com sucesso!')
//     } else {
//         console.log('Erro ao cadastrar o usuario')
//     }
// })

// Altera registro

// connection.query("UPDATE cliente SET nome = 'Francisco Antonio' WHERE telefone = 99999999",
// function(err, result){
// //         if(!err) {
// //             console.log('Usuario alterado com sucesso!')
// //         } else {
// //             console.log('Erro: o usuario não foi alterado com sucesso!')
// //         }
    
// });

// Deleta registro
// connection.query("DELETE FROM cliente WHERE nome = 'Antonio Coelho'", function(err,
//     result){
//     if(!err){
//         console.log("Usuario apagado com sucesso!")
//     } else {
//         console.log("Erro: o usuario não foi apagado com sucesso!")
//     }
// })

// Fim deleta registro

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/src/index.html")
// })

// app.get("/contato", function(req, res){
//     res.sendFile(__dirname + "/src/contato.html")
// })


app.get("/", function(req, res){
    
    res.sendFile(__dirname + "/src/index.html")
    // res.send("Gerenciador financeiro")
})
app.get("/contato",function(req,res){
   res.send("Contato")  
})

app.listen(8080)
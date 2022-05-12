const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Produto  = require("./models/Produto")
const Pedido = require("./models/Pedido")
const Cliente = require("./models/Cliente")
const moment = require('moment')

// app.engine('handlebars', handlebars({defaultLayout: 'main'}))


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))


app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

// Rotas


app.get('/produto', function(req, res) {
    Produto.findAll().then(function(produtos){
        res.render('produto',{produtos:produtos})
    })
 })

 app.get('/pedido', function(req, res) {
     Pedido.findAll().then(function(pedidos){
         res.render('pedido',{pedidos:pedidos})
     })
 })

 app.get('./cliente', function(req, res){
     Cliente.findAll().then(function(clientes){
         res.render('cliente',{clientes:clientes})
     })
 })

app.get('/cad-produto', function(req, res) {
    res.render('cad-produto')
})

app.get('/cad-pedido', function(req, res) {
    res.render('cad-pedido')
})

app.get('/cad-cliente', function(req, res) {
    res.render('cad-cliente')
})

    // Cadastrar dados no banco de dados

app.post('/add-produto',function(req, res){
    Produto.create({
        descricao: req.body.descricao,
        quant: req.body.quant,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/produto')
        //res.send("Produto cadastrado com sucesso.")
    }).catch(function(erro){
        res.send("Erro: Produto não foi cadastrado" + erro)
    })

    
    //res.send("Descrição: " + req.body.descricao + "<br>Quant: " + req.body.quant + "<br>Valor: " + req.body.valor + "<br>")
})

app.post('/add-pedido', function(req, res) {
    Pedido.create({
        descricao: req.body.descricao,
        quant: req.body.quant,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/pedido')
    }).catch(function(erro) {
        res.send("Erro: Pedido não foi cadastrado" + erro)
    })
})

app.post('/add-cliente', function(req, res){
    Cliente.create({
        nome:req.body.nome,
        endereco:req.body.endereco,
        tel:req.body.tel
    }).then(function(){
        res.redirect('/cliente')
    }).catch(function(erro){
        res.send('Erro: Cliente não foi cadastrado' + erro)
    })
})

// Deletar dados do banco

app.get('/del-produto/:id', function(req, res){
    Produto.destroy({
        where: { 'id': req.params.id}
    }).then(function(){
        res.redirect('/produto')
        //res.send("Produto apagado com sucesos")
    }).catch(function(erro){
        res.send("Produto não foi apagado com sucesso")
    })
})

app.listen(8080)
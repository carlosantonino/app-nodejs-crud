const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Produto  = require("./models/Produto")
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
app.get('/cad-produto', function(req, res) {
    res.render('cad-produto')
})

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
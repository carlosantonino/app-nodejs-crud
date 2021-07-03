const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const produto  = require("./models/Produto")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

// Rotas
app.get('/produto', function(req, res) {
    res.render('produto')
})
app.get('/cad-produto', function(req, res) {
    res.render('cad-produto')
})

app.post('/add-produto',function(req, res){
    produto.create({
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



app.listen(8080)
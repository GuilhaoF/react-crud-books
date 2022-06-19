const express = require('express')
const livros = require('./livros')
const app = express()
const port = 3001


//receber os dados,reconhecer os dados como sendo um objeto no formato json
app.use(express.json())

//indentificacao da rota e da const require associada
app.use('/livros',livros)

app.get('/filmes', (req, res) =>{
    res.send('ola seja bem vindo bibliotecario')
})
app.post('/filmes',(req,res)=>{
    const {titulo,genero} = req.body
    res.send(`filme: ${titulo} - Genero : ${genero},recebido..`)
})

app.listen(port,()=>{
    console.log('listening on port' + port)
})







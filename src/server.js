// Configuração Principal
const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000
// const rotas = require('./routes/router')


// Usando os componentes do desenvolvimento
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())
// app.use('/collaborator', rotas)

app.get('/', (request, response) => {
    response.json({ messege: "Oi Express!" })
})

// Configuração Banco de Dados
const mongoose = require('mongoose')
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@apicluster.2urjbbg.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(app.listen(port, () => console.log('Successfully connected to the bank')))
    .catch(err => console.log(err))
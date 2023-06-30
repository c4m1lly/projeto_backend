const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request,response) {
    response.json({
        Nome: "Camilly Silva",
        Imagem: "https://avatars.githubusercontent.com/u/85909520?v=4",
         Bio: "Student Software Engineering"
    })
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/woman",mostraMulher))
app.listen(porta,mostraPorta)
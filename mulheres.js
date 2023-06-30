const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        Nome: "Camilly Silva",
        Imagem: "https://avatars.githubusercontent.com/u/85909520?v=4",
         Bio: "Student Software Engineering",
    },
    {
        Nome: "Iana Chan",
        Imagem: "https://www.google.com/search?hl=pt-BR&sxsrf=APwXEdf3V3LbFi9dTMToiQe14Paa0s72AQ:1685583995307&q=iana+chan&tbm=isch&sa=X&ved=2ahUKEwjZ3Z3a-aD_AhVGHLkGHRQQAWAQ0pQJegQICxAB&biw=1366&bih=649&dpr=1#imgrc=Orgapgz_DX0gnM ",
        Bio: "Fundadora da Programaria"
    },
    {
        Nome: "Ada Lovelace",
        Imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Frevistagalileu.globo.com%2FSociedade%2FCuriosidade%2Fnoticia%2F2018%2F02%2F10-fatos-sobre-ada-lovelace-que-farao-voce-admira-la-ainda-mais.html&psig=AOvVaw0Y0LCLRr2DxqojxVSjM44R&ust=1685670481738000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiQr_35oP8CFQAAAAAdAAAAABAE ",
        Bio: " Matemática",
    }
]
function mostraMulheres(request, response){
    response.json(mulheres)
}
function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta,mostraPorta)
import express from "express"

import { Sequelize } from "sequelize"
import bdconfig from "./Models/config.js"

// Rotas
import PublicRoute from "./Routes/PublicRoute.js"
import RegisterRoute from "./Routes/RegisterRoute.js"
import createUser from "./Routes/Create.User.js"




const server = express()
server.use(express.json())





server.get("/", (req, res)=>{
    
    res.send("teste de rota principal")
    

})

server.use("", PublicRoute)
server.use("", RegisterRoute)
server.use("", createUser)


const port = 3000
server.listen(port, ()=>console.log("Server Rodando"))
import express from "express"
import users from "../Models/model.password.js"
import { json } from "sequelize"

const router = express.Router()

router.get("/useradd", (req, res) => {


    users.findAll().then(users =>{
        res.json(users)

    }).catch((error=>{
        console.log(error)
    }))


     
})


export default router
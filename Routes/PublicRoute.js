import express, { json } from "express"
import passwords from "../Models/model.password.js"

const router=express.Router()


router.post('/cadastro', (req, res)=>{
  

       const {adminpass, passuser}=req.body


       passwords.create(
            {
                 adminpass:adminpass,
                 passuser:passuser 
            }
       )


     
console.log(adminpass)
console.log(passuser)


})



router.get("/cadastro", (req, res)=>{

})

export default router
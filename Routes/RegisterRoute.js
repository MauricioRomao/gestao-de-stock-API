import express from "express";
import Produto from "../Models/model.produtos.js";
import ListarProdutos from "../Controllers/Listar.js"; 

const router = express.Router();

router.get("/register", async (req, res) => {
  try {


    const produtos = await ListarProdutos();

    res.status(200).json(produtos); 
} catch (e) {
    res.status(500).json({ message: "Erro ao listar os produtos", error: e.message });
  }
});

//// REgister posta 

router.post("/register", (req, res)=>{

     const {nome_produto, quantidade, preco, referencia}=req.body


     Produto.create({
          nome_prod:nome_produto,
          quantidade:quantidade,
          referencia:referencia,
          preco:preco

     }).then(()=> console.log(" Sucesso na criacao de dados !!"
          
     ))
     .catch((e)=>console.log("Erro na criacao de dados " + e_))

  return   res.status(201)

}
)



export default router
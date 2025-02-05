import Produto from "../Models/model.produtos.js";

const ListarProdutos = async () => {
  try {
    const produtos = await Produto.findAll();
    return produtos;  
  } catch (error) {
    console.log("Erro ao listar produtos:", error);
    throw error;  
  }
};

export default ListarProdutos
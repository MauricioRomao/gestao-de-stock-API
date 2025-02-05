import { Sequelize } from "sequelize";
import sequelize from "./config.js";

const Produto = sequelize.define("produtos", {
  nome_prod: {
    type: Sequelize.STRING,  
  },
  quantidade: {
    type: Sequelize.INTEGER, 
  },
  preco: {
    type: Sequelize.INTEGER,  
  },
  referencia: {
    type: Sequelize.STRING,  
  },
});

//Produto.sync({ force: true })

export default Produto; 

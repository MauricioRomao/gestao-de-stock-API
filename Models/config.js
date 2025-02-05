// config.js
import { Sequelize } from 'sequelize';

// Configurando a conexão com o MySQL
const sequelize = new Sequelize('Store', 'root', 'grandeteste', {
  host: 'localhost',
  dialect: 'mysql',
});



sequelize.authenticate()

.then(()=> console.log("conectado com sucesso"))
.catch((error)=> console.log(error))



export default sequelize
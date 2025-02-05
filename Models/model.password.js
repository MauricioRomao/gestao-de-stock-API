import { Sequelize } from "sequelize";
import sequelize from "./config.js";


const passwords = sequelize.define("Passwords", {
    adminpass: {

        type: Sequelize.STRING,
    },

    userpass: {
   
          type: Sequelize.STRING
    }
})



export default passwords
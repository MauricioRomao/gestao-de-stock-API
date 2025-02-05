import { Sequelize } from "sequelize";
import sequelize from "./config";

const users = sequelize.create("users",{
    admin:{
        type:Sequelize.String
    },
    user_normal:{
        type:Sequelize.String
    }
})
  //users.sync({force:true})

export default users

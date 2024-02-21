const UserModel = require("../models/user.model");

class Users {
    constructor(){
        console.log('new intance of db manager')
    }
    async getAll(){
        let users = await UserModel.find().lean()
        return users;
    }
    async saveUser(user){
        let result = await UserModel.create(user)
        return result; 
    }
}

module.exports = Users;
const {Router} = require('express');
const UsersManager = require('../dao/dbManagers/users');

const router = Router();

const manager = new UsersManager()

router.get('/',async (req, res)=>{
    const users = await manager.getAll();
    res.render('users',{users:users})
})


module.exports = router;
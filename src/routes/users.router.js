const {Router} = require('express');
const Users = require('../dao/dbManagers/users');


const router = Router();
const manager = new Users()


router.get('/',async (req, res)=>{
    const users  = await manager.getAll()
    res.send({status:'success', users})
})

router.post('/', async (req, res)=>{

    if(!req.body.first_name){
        return res.status(400).send({status:'error', error:'Incomplete data'})
    }

    await manager.saveUser(req.body)
    res.send({status:'success'})
})

module.exports = router;
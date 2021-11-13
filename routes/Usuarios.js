const express = require('express')
const router = express.Router()

const { 
    usersGet, 
    usersPost, 
    usersGetBySKU, 
    usersPut, 
    usersDelete
} = require('../controllers/Usuarios')

router.get('/', usersGet);

router.post('/', usersPost);

router.get('/:sku', usersGetBySKU);

router.put('/:sku', usersPut);

router.delete('/:sku', usersDelete);

module.exports = router
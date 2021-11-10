const express = require('express')

const router = express.Router()

const { 
    productsGet, 
    productsPost, 
    productsGetBySKU, 
    productsPut, 
    productsDelete
} = require('../controllers/producto_controllador')

router.get('/', productsGet);

router.post('/', productsPost);

router.get('/:sku', productsGetBySKU);

router.put('/:sku', productsPut);

router.delete(':sku', productsDelete);


module.exports = router
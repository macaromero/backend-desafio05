const router = require('express').Router();
const {createProduct, getProducts} = require('../controllers/productos');


router.post('/', createProduct);

router.get('/', getProducts);

module.exports = router;
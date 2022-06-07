const router = require('express').Router();
const {showForm} = require('../controllers/main');


router.get('/', showForm);


module.exports = router;
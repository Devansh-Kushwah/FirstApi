const express = require('express');
const router  = express.Router();
const {
    getAllProducts, 
    getAllProductsTesting
} = require('../controllers/product');

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);

module.exports = router;   // Exporting the router to be used in app.js 4trfd
const { Products } = require('../controllers');

const router = require('express').Router();

router.get('/listKategori', Products.getKategoriList);

router.get('/listProdukByKategori/:id', Products.getListProdukByKategori);

router.post('/showPrice', Products.showPrice);

// router.get('/display-price', (req, res)=>{
//     res.json({message: 'list'})
// });

module.exports = router;
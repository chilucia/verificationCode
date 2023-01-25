const express = require('express');
const {IsAdminAuth} = require('../utils/authorization');

const {NewBags, DeleteBags} = require('../controllers/Bags');

const router = express.Router();

router.post('/admin/:id', IsAdminAuth, NewBags)
router.delete('/admin/:id/:productid', IsAdminAuth, DeleteBags)

module.exports = router
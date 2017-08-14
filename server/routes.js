const express = require('express');
const routeHandlers = require('./routeHandlers');

const router = express.Router();

router.get('/all', routeHandlers.findAll);

router.get('/:id', routeHandlers.findOne);

module.exports = router;

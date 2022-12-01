const express = require('express');
const router = express.Router();
const mainController = require('../Controllers/mainController');

router.get('/', mainController.home);
router.get('/manualDeUso', mainController.manualDeUso);
router.get('/fundamentos', mainController.fundamentos);

module.exports = router;
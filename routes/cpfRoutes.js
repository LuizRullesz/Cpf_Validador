const express = require('express');
const router = express.Router();

const cpfController = require('../controllers/cpfController');

// POST /api/validar-cpf
router.post('/validar-cpf', cpfController.validar);

module.exports = router;

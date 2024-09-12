const express = require('express');
const router = express.Router();
const controllerHerois = require('./../controllers/cadastrar_herois');
const controllerViloes = require('./../controllers/cadastrar_viloes');
const controllerBatalhar = require('./../controllers/batalhar');

router.post('/herois', controllerHerois.herois);
router.post('/viloes', controllerViloes.viloes);
router.post('/batalhar', controllerBatalhar.batalhar);

module.exports = router;

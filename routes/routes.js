const express = require('express');
const router = express.Router();
const controllerHerois = require('./../controllers/cadastrar_herois');
const controllerViloes = require('./../controllers/cadastrar_viloes');
const controllerBatalhar = require('./../controllers/batalhar');

router.get('/lista-herois', controllerHerois.listaHerois);
router.get('/lista-viloes', controllerViloes.listaViloes);
router.post('/herois', controllerHerois.herois);
router.post('/viloes', controllerViloes.viloes);
router.post('/batalhar/:idHeroi/:idVilao', controllerBatalhar.batalhar);
router.put('/editar-heroi/:id', controllerHerois.editarHeroi);
router.put('/editar-vilao/:id', controllerViloes.editarVilao);
router.delete('/deletar-heroi/:id', controllerHerois.deletarHeroi);
router.delete('/deletar-vilao/:id', controllerViloes.deletarVilao);

module.exports = router;

var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimasPlanta/", function (req, res) {
    medidaController.buscarUltimasMedidasPlanta(req, res);
});

router.get("/ultimasSentimento/", function (req, res) {
    medidaController.buscarUltimasMedidasSentimento(req, res);
});

router.get("/ultimasFrequencia/", function (req, res) {
    medidaController.buscarUltimasMedidasFrequencia(req, res);
});

router.get("/ultimasEstresse/", function (req, res) {
    medidaController.buscarUltimasMedidasEstresse(req, res);
});

router.get("/ultimasMixado/", function (req, res) {
    medidaController.buscarUltimasMedidasMixado(req, res);
});

module.exports = router;
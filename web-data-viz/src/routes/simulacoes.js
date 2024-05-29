var express = require("express");
var router = express.Router();

var simulacoesController = require("../controllers/simulacoesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    simulacoesController.cadastrar(req, res);
})


module.exports = router;
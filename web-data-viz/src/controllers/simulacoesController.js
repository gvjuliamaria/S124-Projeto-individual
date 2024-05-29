var simulacoesModel = require("../models/simulacoesModel");

const { copy } = require("../routes/simulacoes");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log(req.body);
    var planta = req.body.plantaServer;
    var tempo = req.body.tempoServer;
    var idUsuario = req.body.idUsuarioServer;


    // Faça as validações dos valores
    if (planta == undefined) {
        res.status(400).send("Sua planta está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    }else{

        // Passe os valores como parâmetro e vá para o arquivo simulacoesModel.js
        simulacoesModel.cadastrar(planta, tempo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}
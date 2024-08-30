var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function selecionarIdUsuarioPorEmail(req, res) {
    
    // fetch()
    
    var email = req.body.emailServer;
    // NOVO !!!!
    usuarioModel.selecionarIdUsuarioPorEmail(email)
    .then((resultado) => {
        if (resultado.length > 0) {
        res.json({
            id: resultado[0].idUsuario
        });
        } else {
        res.status(204).json({ idUsuario: [] });
        }
    })

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log(req.body);
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var idade = req.body.idadeServer;
    var frequenciaContato = req.body.frequenciaContatoServer;
    var nivelEstresse = req.body.nivelEstresseServer;
    var sentimento = req.body.sentimentoServer;

    // Validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (frequenciaContato == undefined) {
        res.status(123).send("Sua frequencia de contato está undefined!");
    } else if (nivelEstresse == undefined) {
        res.status(400).send("Seu nível de estresse está undefined!");
    } else if (sentimento == undefined) {
        res.status(400).send("Seu sentimento está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, idade, frequenciaContato, nivelEstresse, sentimento)
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
    cadastrar,
    selecionarIdUsuarioPorEmail
}
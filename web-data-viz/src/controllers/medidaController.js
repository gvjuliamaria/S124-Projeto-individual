var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidasPlanta(req, res) {
    console.log(`\n\n Recuperando as medidas das Plantas`);

    medidaModel.buscarUltimasMedidasPlanta().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasSentimento(req, res) {
    console.log(`\n\n Recuperando as medidas dos Sentimentos`);

    medidaModel.buscarUltimasMedidasSentimento().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasFrequencia(req, res) {
    console.log(`\n\n Recuperando as medidas das Idades`);

    medidaModel.buscarUltimasMedidasFrequencia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasEstresse(req, res) {
    console.log(`\n\n Recuperando as medidas dos Níveis de Estresses`);

    medidaModel.buscarUltimasMedidasEstresse().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidasPlanta,
    buscarUltimasMedidasSentimento,
    buscarUltimasMedidasFrequencia,
    buscarUltimasMedidasEstresse,

}
var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = ` SELECT planta FROM simulacao;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSimulacao) {

    var instrucaoSql = `SELECT count(planta) FROM simulacao
    WHERE planta = 'abobora'
    ORDER BY idSimulacao`;

    var instrucaoSql2 = `SELECT count(planta) FROM simulacao
    WHERE planta = 'alho'
    ORDER BY idSimulacao`;


    console.log("Executando a instrução SQL: \n" + instrucaoSql + instrucaoSql2);
    return database.executar(instrucaoSql + instrucaoSql2);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}

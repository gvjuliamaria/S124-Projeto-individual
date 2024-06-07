var database = require("../database/config");

function buscarUltimasMedidasPlanta() {

    var instrucaoSql = ` SELECT planta FROM simulacao;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasSentimento() {
    var instrucaoSql = ` SELECT sentimento FROM usuario;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasFrequencia() {
    var instrucaoSql = `SELECT frequenciaContato, nivelEstresse FROM usuario;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasEstresse() {
    var instrucaoSql = ` SELECT nivelEstresse, avg(idade) as media, count(nivelEstresse) as qtdUsuario FROM usuario
GROUP BY nivelEstresse
ORDER BY nivelEstresse;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarUltimasMedidasPlanta,
    buscarUltimasMedidasSentimento,
    buscarUltimasMedidasFrequencia,
    buscarUltimasMedidasEstresse

}

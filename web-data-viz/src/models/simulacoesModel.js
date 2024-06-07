var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(planta, tempo, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL\n \n\t\t >> function cadastrar():", planta, tempo, " \n \n");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO simulacao (planta, meses, fkUsuario) VALUES ('${planta}', '${tempo}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};
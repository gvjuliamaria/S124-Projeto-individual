var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, idade, frequenciaContato, nivelEstresse, sentimento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function cadastrar():", nome, email, idade, frequenciaContato, nivelEstresse, sentimento, "\n \n");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, idade, frequenciaContato, nivelEstresse, sentimento) VALUES ('${nome}', '${email}', '${idade}', '${frequenciaContato}', '${nivelEstresse}', '${sentimento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selecionarIdUsuarioPorEmail(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> function cadastrar():", email, "\n \n");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `SELECT idUsuario FROM usuario 
    WHERE email = '${email}'
    ORDER BY idUsuario DESC
    Limit 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    selecionarIdUsuarioPorEmail
};

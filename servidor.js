const express = require('express');// inportando o express
const app = express();// Cria uma instância do aplicativo Express, que será usada para configurar rotas, middleware e outros aspectos do servidor.
const path = require('path');// inportta o PATH do node 
/*
 Define a porta que o servidor irá escutar. Se a variável de ambiente PORT estiver definida,
 ela será usada, caso contrário, a porta padrão 3000 será utilizada. =>
*/
const PORT = process.env.PORT || 3000;
/*
 Define a porta que o servidor irá escutar. Se a variável de ambiente PORT estiver definida, 
 ela será usada, caso contrário, a porta padrão 3000 será utilizada. => 
 */
app.listen(PORT,()=> console.log(`Servidor rodando na porta ${PORT}`));
console.log('Servidor iniciado com sucesso !');
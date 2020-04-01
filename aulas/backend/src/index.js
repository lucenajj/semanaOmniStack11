/**
 * Métodos http
 * GET: Buscar/Listar uma informação do backend.
 * POST: Criar uma informação no backend.
 * PUT: Alterar uma informação no backend.
 * DELETE: Deletar uma informação no backend.
 */

 /**
  * TIPOS DE PARÂMETROS.
  * 
  * QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação).
  * ROUTE PARAMS: Parâmetros para identificar recursos.
  * REQUEST BODY: Corpo da requisição utilizado para criar ou alterar algum recurso.
  */

  /**
   * SQL "É universal": MySQl, SQLite, PostgreSQl, Oracle, Microsoft SQL Server.
   * NoSQL: MongoDB, CouchDB, etc. 
   */

   /**
    * Driver: SELECT *FROM users.
    * Query Builder: table('users').select('*').where().
    */


//Importa as funcionalidades do Express para a variável express
const express = require('express');
const cors = require('cors')
const routes = require('./routes');

//variavel que armazena a minha aplicação "Criando ela"
const app = express();

app.use(cors())

app.use(express.json());

app.use(routes);

// Ouve a porta 3333 no navegador.
app.listen(3333);


1


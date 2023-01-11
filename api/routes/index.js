const bodyParser = require("body-parser");
const pessoasRoutes = require("./pessoasRoutes");
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoasRoutes,
    niveis,
    turmas
    );
}
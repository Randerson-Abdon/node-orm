const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPessoas);
router.get('/pessoas/:id', PessoaController.getPessoaById);
router.post('/pessoas', PessoaController.createPessoa);
router.put('/pessoas/:id', PessoaController.updatePessoa);
router.delete('/pessoas/:id', PessoaController.deletePessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getPessoaByMatricula);

module.exports = router;
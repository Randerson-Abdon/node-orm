const database = require('../models');


class PessoaController {
    //pegar todas as pessoas
    static async getAllPessoas(req, res) {
        try {
            const allPesoas = await database.Pessoas.findAll();
        return res.status(200).json(allPesoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //pegar pessoa por id
    static async getPessoaById(req, res) {
      const { id } = req.params;
      try {
        const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
        return res.status(200).json(pessoa);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    //pegar pessoa por matricula
    static async getPessoaByMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;
      try {
        const matricula = await database.Matriculas.findOne({ 
          where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
            }
          });
        return res.status(200).json(matricula);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    //criar pessoa
    static async createPessoa(req, res) {
      const pessoa = req.body;
      try {
        const newPessoa = await database.Pessoas.create(pessoa);
        return res.status(200).json(newPessoa);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    //criar matricula
    static async createMatricula(req, res) {
      const matricula = req.body;
      try {
        const newMatricula = await database.Matriculas.create(matricula);
        return res.status(200).json(newMatricula);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    //atualizar pessoa
    static async updatePessoa(req, res) {
      const { id } = req.params;
      const pessoa = req.body;
      try {
        await database.Pessoas.update(pessoa, { where: { id: Number(id) } });
        const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });
        return res.status(200).json(pessoaAtualizada);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    //deletar pessoa
    static async deletePessoa(req, res) {
      const { id } = req.params;
      try {
        await database.Pessoas.destroy({ where: { id: Number(id) } });
        return res.status(200).json({ message: `Pessoa ${id} deletada` });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = PessoaController;
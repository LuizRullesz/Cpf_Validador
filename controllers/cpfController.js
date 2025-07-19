const { validarCPF } = require('../services/cpfService');

function validar(req, res) {
  const { cpf } = req.body;

  if (!cpf) {
    return res.status(400).json({ erro: 'CPF não enviado' });
  }

  const valido = validarCPF(cpf);
  return res.json({ cpf, valido });
}

module.exports = { validar };

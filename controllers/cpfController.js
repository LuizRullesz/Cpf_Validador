const { validarCPF, validarEMAIL } = require('../services/cpfService');

function validar(req, res) {
  const { cpf } = req.body;

  if (!cpf) {
    return res.status(400).json({ erro: 'CPF não enviado' });
  }

  const valido = validarCPF(cpf);
  return res.json({ cpf, valido });
}

function emailValido(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ erro: 'Email não enviado' });
  }

  const valido = validarEMAIL(email);
  return res.json({ email, valido });
}

module.exports = { validar, emailValido };

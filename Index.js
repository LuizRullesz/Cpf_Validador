const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
}

app.post('/validar-cpf', (req, res) => {
    const { cpf } = req.body;
  
    if (!cpf) {
      return res.status(400).json({ erro: 'CPF não enviado' });
    }
  
    const valido = validarCPF(cpf);
    return res.json({ cpf, valido });
  });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


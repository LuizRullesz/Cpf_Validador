const express = require('express');
const cors = require('cors');
const path = require('path');
const cpfRoutes = require('./routes/cpfRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', cpfRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

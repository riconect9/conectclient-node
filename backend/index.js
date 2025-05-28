// backend/index.js
const express = require('express');
const app = express();
const cors = require('cors');
const profissionaisRoutes = require('./routes/profissionais');

// Configurações básicas
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', profissionaisRoutes);

// Teste de rota raiz
app.get('/', (req, res) => {
  res.send('API Conect Client rodando com sucesso');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

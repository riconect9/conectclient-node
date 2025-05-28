// backend/routes/profissionais.js
const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

// Conexão com Supabase (com seus dados reais)
const supabaseUrl = "https://vzfyqtllzmuuccmtywkp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6ZnlxdGxsem11dWNjbXR5d2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxOTkxNjQsImV4cCI6MjA2Mzc3NTE2NH0.UMJ_57o9ITGyvrBxeVQkx7-9j4ZmXUENuq_2vXBuH3c";
const supabase = createClient(supabaseUrl, supabaseKey);

// GET /profissionais → listar todos os profissionais
router.get('/profissionais', async (req, res) => {
  const { data, error } = await supabase.from('Profissionais').select('*');
  if (error) return res.status(500).json({ erro: error.message });
  res.json(data);
});

// POST /profissionais → cadastrar novo profissional
router.post('/profissionais', async (req, res) => {
  const { nome, especialidade, funcao, foto_url, empresa_id, ativo } = req.body;
  const { data, error } = await supabase
    .from('Profissionais')
    .insert([{ nome, especialidade, funcao, foto_url, empresa_id, ativo }]);

  if (error) return res.status(500).json({ erro: error.message });
  res.status(201).json(data);
});

module.exports = router;

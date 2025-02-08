const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Manejar rutas desconocidas (opcional, solo si tienes un index.html principal)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'core/scripts/dashboard.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 📌 Servir archivos estáticos desde la carpeta "core"
app.use(express.static(path.join(__dirname, "core")));

//  Servir archivos estáticos desde la carpeta "modules"
app.use("/modules", express.static(path.join(__dirname, "modules")));

//  Rutas directas a los archivos HTML (para evitar problemas de redirección)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "core", "login.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "core", "dashboard.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "core", "profile.html"));
});

// 📌 Rutas para los módulos
app.get("/social-network", (req, res) => {
  res.sendFile(path.join(__dirname, "modules", "social-network", "scripts", "index.html"));
});

app.get("/vet-management", (req, res) => {
  res.sendFile(path.join(__dirname, "modules", "vet-management", "scripts", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

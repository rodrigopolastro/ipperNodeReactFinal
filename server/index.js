const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Mensagem vinda do servidor!"});
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;



async function connectDB() {
  const MongoClient = require('mongodb').MongoClient;
  const uri    = 'mongodb://localhost:27017';
  const dbName = 'pirulito';
  const client = new MongoClient(uri);

  try {
    // const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('verifications').findOne({ name: "rodrigo" });

    return result;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
}

app.get("/api", (request, response) => {
  try {
    result = connectDB();
    console.log(result)
    return response.json(result.message);
  } catch (error) {
    console.error('Erro ao atualizar exemplo:', error);
    throw error;
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});


// // Configurar a conexão com o banco de dados MongoDB


// const conectarMongoDB = async () => {
//   try {
//     const client = await MongoClient.connect(url, { useUnifiedTopology: true });
//     const db = client.db(dbName);
//     return db;
//   } catch (error) {
//     console.error('Erro ao conectar ao banco de dados:', error);
//     throw error;
//   }
// };

// var capacete = {message: "mensagem padrão declarada no início"};
// // const pegarDadoBanco = async () => {
// //   try {
// //     // const db = await conectarMongoDB();
// //     // capacete = await db.verifications.findOne({ message: "rodrigo" });
// //     // console.log(capacete);
// //     capacete = { message: "essa é mensagem atualizada de teste" }
// //     return teste;
// //   } catch (error) {
// //     console.error('Erro ao buscar dados:', error);
// //     throw error;
// //   }
// // };



const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'ipperTechnologies';
const client = new MongoClient(uri);

app.get("/getAlertValue", async (request, response) => {
  try {
    await client.connect();

    const db = client.db(dbName);
    const verifications = db.collection("verifications");
    let result = await verifications.findOne()

    response.json(result)
  } catch (error) {
    console.error(error);
  }
});

app.get("/turnOffAlert", async (request, response) => {
  // console.log("TESTE");
  // console.log(request.body);

  try {
    await client.connect();

    const db = client.db(dbName);
    const verifications = db.collection("verifications");
    verifications.updateOne({ id: 1}, { $set: { alert: false } })
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});

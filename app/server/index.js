const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017";
const dbName = "ipper";
const client = new MongoClient(uri);
let verification, alerts;

async function connectDatabase() {
  try {
    await client.connect();
    const db = client.db(dbName);
    verification = db.collection("verification")
    alerts = db.collection("alerts")
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta: ${PORT}`);
      // console.log(alerts.findOne())
    });
  } catch (error) {
    console.error(error);
  }
}
connectDatabase();

app.get("/getAlertValue", async (request, response) => {
  try {
    let result = await verification.findOne();
    response.json(result);
  } catch (error) {
    console.error(error);
  }
});

app.get("/turnOffAlert", async (request, response) => {
  try {
      await verification.updateOne(
          { _id: 1 },
          { $set: { isAlertOn: false } }
        );
      response.json({ result: "Alerta desligado"} )
  } catch (error) {
    console.error(error);
  }
});

app.get("/getAllAlerts", async (request, response) => {
  try {
    let cursor = await alerts.find({});
    let results = await cursor.toArray()
    // console.log(Array.isArray(results))
    response.send(results);
  } catch (error) {
    console.error(error);
  }
});

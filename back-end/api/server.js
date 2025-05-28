import express from "express";
import cors from "cors";
import { db } from "./connect.js";
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (request, response) => {
    response.send("Somente endpoints '/artists' e /songs");
});

app.get('/artists', async (request, response) => {
    const songCollection = await db.collection('artists').find({}).toArray();
    response.send(songCollection);
});

app.get('/songs', async (request, response) => {
    const songCollection = await db.collection('songs').find({}).toArray();
    response.send(songCollection);
});

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
});
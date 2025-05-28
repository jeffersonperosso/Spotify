import { MongoClient } from "mongodb";

const URI = "mongodb+srv://spotify:spotify@cluster0.hpru0pr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");

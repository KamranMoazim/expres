
import express from 'express';

const app = express();



app.get('/', (req, res) => res.json({ message: "App works!" }));

app.listen(3000, () => console.log("Server is running!"));
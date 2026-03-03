// controlar acesso pela catraca

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); 
app.use(express.json());

let history = [{ memberId: 1, timestamp: new Date(), entry: "Permitida" }];

app.get('/access', (req, res) => res.json({ service: "Access Control", data: history }));
app.listen(3001, () => console.log("Access Service rodando, 3001"));
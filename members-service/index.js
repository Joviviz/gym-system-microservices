// cadastro de alunos


const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors()); 

let members = [{ id: 1, name: "Joe Silva", plan: "Ultra", status: "Ativo" }];

// listar membros
app.get('/members', (req, res) => res.json({ service: "Members", data: members }));

// add novo membro 
app.post('/members', (req, res) => {
    const newMember = {id: members.length + 1, ...req.body };
    members.push(newMember);

    res.status(201).json({message: "Usuário registrado com sucesso!", data: newMember})
});


app.listen(3003, () => console.log("Members Service rodando, 3003"));
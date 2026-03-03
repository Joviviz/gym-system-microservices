// gerenciar fichas de treino

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let workouts = [{ memberId: 1, exercises: ["Supino Barra", "Peck Deck", "Supino Inclinado", "Crossover", "Puxada Alta"] }];

// listar treinos
app.get('/workouts', (req, res) => res.json({ service: "Workouts", data: workouts }));

// adicionar treino
app.post('/workouts', (req, res) => {
    const newWorkout = req.body;
    workouts.push(newWorkout);

    res.status(201).json({message: "Treino registrado com sucesso!", data: newWorkout})
} );

app.listen(3004, () => console.log("Workout Service rodando, 3004"));
const express = require("express");
const app = express();

// GET /instrutores
// GET /instrutores/5
// POST, PATCH, PUT, DELETE

const listaDeInstrutores = [
  {
    id:1,
    nome: "Maxwell Barboza",
    idade: 44,
    materia: "Back-End",
  },
  {
    id:2,
    nome: "Jorge Claudio",
    idade: 30,
    materia: "Back-End",
  },
  {
    id:3,
    nome: "Mauro Jr",
    idade: 25,
    materia: "Front-End",
  },
  {
    id:4,
    nome: "João Abrantes",
    idade: 50,
    materia: "Front-End",
  },
];


app.get("/instrutores", (req, res)=>{
  res.json(listaDeInstrutores);
});

app.get("/instrutores/:idConsultado", (req, res)=>{
  const instrutor = listaDeInstrutores.find(instrutor => 
    instrutor.id === Number(req.params.idConsultado));
  res.json(instrutor);
});


app.listen(8000);
const express = require("express");
const app = express();
app.use(express.json());

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

let proximoId = 5;

app.get("/instrutores", (req, res)=>{
  res.json(listaDeInstrutores);
});

app.get("/instrutores/:idConsultado", (req, res)=>{
  const instrutor = listaDeInstrutores.find(instrutor => 
    instrutor.id === Number(req.params.idConsultado));
  res.json(instrutor);
});

// POST /instrutores
app.post("/instrutores", (req, res)=> {
  const novoInstrutor = {
    id: proximoId,
    nome: req.body.nome,
    idade: req.body.idade,
    materia: req.body.materia,
  }
  listaDeInstrutores.push(novoInstrutor);
  proximoId += 1;
  res.json(novoInstrutor);
});

// PATCH /instrutores/id
app.patch("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listaDeInstrutores.find(instrutor => 
    instrutor.id === Number(req.params.idConsultado));
  if(req.body.nome !== undefined){
    instrutor.nome = req.body.nome;
  }  
  if(req.body.idade !== undefined){
    instrutor.idade = req.body.idade;
  }  
  if(req.body.materia !== undefined){
    instrutor.materia = req.body.materia;
  }  
  res.json(instrutor);
});

// PUT /instrutores/id
app.put("/instrutores/:idConsultado", (req, res) =>{
  const instrutor = listaDeInstrutores.find(instrutor => 
    instrutor.id === Number(req.params.idConsultado));
  if(instrutor){
    instrutor.nome = req.body.nome;
    instrutor.idade = req.body.idade;
    instrutor.materia = req.body.materia;
    res.json(instrutor);
  } else{
    const novoInstrutores = req.body;
    listaDeInstrutores.push(novoInstrutores);
    res.json(novoInstrutores);
  } 
});


// DELETE /instrutrores/id
app.delete("/instrutores/:idConsultado", (req, res) => {
  const instrutor = listaDeInstrutores.find(instrutor => 
    instrutor.id === Number(req.params.idConsultado));

  if(instrutor){
    const indice = listaDeInstrutores.indexOf(instrutor);  
    listaDeInstrutores.splice(indice, 1);
    res.json(instrutor);
  }else{
    res.status(400);
    res.send("Usuário não existe")
  }  
  

});


app.listen(8000);
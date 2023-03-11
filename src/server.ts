import { Database } from './database';
import express from 'express'
import { randomUUID } from 'node:crypto';

const app = express()

const port = 3000;
//Interceptador de dados
app.use(express.json());

const database = new Database();



//var dados:string[] = [];

app.get("/", (request, response) => {
  const user = database.select("user");
  response.json(user);
});

// Parametro que está vindo do cliente REQUEST
//Parametro que está indo para o cliente RESPONSE

app.post("/", (request, response) => {

    const { name, email } = request.body;

    const user = {
      id : randomUUID(),
      name: name,
      email: email,
    };

    database.insert('user', user);

    response.status(201).json({msg: "sucesso!"});
});


app.listen(port, () => {
  console.log(`Server Running!! 😎 - end: http://localhost:${port}`);
});


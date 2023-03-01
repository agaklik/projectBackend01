import express from 'express'

const app = express()

const port = 3000

app.get("/", (request, response) => {
  // response.send("Hello Word FEMA TI 2023!")
  response.json({msg:"Fim da Aula!!!"});
});

app.listen(port, () => {
  console.log("Server Running!! 😎");
});



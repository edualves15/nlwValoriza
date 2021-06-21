import express, { request, response } from "express";

// criação do servidor
const app = express();

app.get("/test", (request, response) => {
    // request = entrada
    // response = saída
    return response.send("Olá, NLW!");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá, NLW! Método POST")
});


// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));


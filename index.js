const express = require("express");
const cors = require("cors"); // Importe o pacote cors

const server = express();

const fs = require("fs");
server.use(cors());
server.use(express.json());

server.get("/pedidos", (req, res) => {
  // Lê o arquivo JSON
  fs.readFile("base/base.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro na leitura do arquivo JSON");
    }

    // Converte o conteúdo do arquivo em um objeto JavaScript
    const jsonData = JSON.parse(data);

    // Retorna a categoria 'pedidos' como resposta
    res.json(jsonData.pedidos);
  });
});

server.get("/pedidos/resumoStatus", (req, res) => {
  // Lê o arquivo JSON
  fs.readFile("base/base.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro na leitura do arquivo JSON");
    }

    // Converte o conteúdo do arquivo em um objeto JavaScript
    const jsonData = JSON.parse(data);

    // Retorna a categoria 'pedidos/resumoStatus' como resposta
    res.json(jsonData["pedidos/resumoStatus"]);
  });
});

server.get("/pedidos/totalVendas", (req, res) => {
  // Lê o arquivo JSON
  fs.readFile("base/base.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Erro na leitura do arquivo JSON");
    }

    // Converte o conteúdo do arquivo em um objeto JavaScript
    const jsonData = JSON.parse(data);

    // Retorna a categoria 'pedidos/totalVendas' como resposta
    res.json(jsonData["pedidos/totalVendas"]);
  });
});

const porta = 3000;
server.listen(porta, () => {
  console.log(`Servidor Express rodando na porta ${porta}`);
});

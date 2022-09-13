// ## Forma padrão de importação
// const express = require('express');
// ## Com nova versão do node .mjs, importação via package.json
import express from 'express';
const app = express();
//www.minhapi.com/ads
//localhost:3333/ads
//request = buscar informações que estão vindo da requisição (nome, jogo, tempo de jogo,etc.)
//response = devolver uma resposta
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' }
    ]);
});
app.listen(3333);

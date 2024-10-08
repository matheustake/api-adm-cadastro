import * as db from '../repository/loginRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/login', async (req,resp) =>{

try {
    let registros = await db.consultarLogin();
    resp.send(registros)
} 

catch (error) {
    
    resp.status(400).send({
            erro: error.message
        })
}
})

endpoints.post('/login', async (req, resp) => {

try {
    
let login = req.body
let id = db.inserirLogin(login);


resp.send({
    novoId: id
})


} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.put('/login/:id', async (req, resp) =>{

try {

    let login = req.body;
    let id = req.params.id;
    
    
    let linhasAfetadas = await db.alterarLogin(login, id);
    if (linhasAfetadas >= 1) {
        resp.send();
    }
    else {
        resp.status(404).send({ erro: 'Nenhum registro encontrado'})
    }
   

} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.delete('/login/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarLogin(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }  
})

export default endpoints;
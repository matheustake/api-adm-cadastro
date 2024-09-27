import * as db from '../repository/cadastroRepository.js';

import { Router } from "express"
const endpoints = Router();

endpoints.get('/cadastro', async (req,resp) =>{

try {
    let registros = await db.consultarCadastro();
    resp.send(registros)
} 

catch (error) {
    
    resp.status(400).send({
            erro: error.message
        })
}
})

endpoints.post('/cadastro/', async (req, resp) => {

try {
    
let login = req.body
let id = db.inserirCadastro(login);


resp.send({
    novoId: id
})


} catch (error) {
    resp.status(400).send({
        erro: error.message
    })
}
})

endpoints.put('/cadastro/:id', async (req, resp) =>{

try {

    let login = req.body;
    let id = req.params.id;
    
    
    let linhasAfetadas = await db.alterarCadastro(login, id);
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

endpoints.delete('/cadastro/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarCadastro(id);
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
import 'dotenv/config.js';
import express  from 'express';
import cors from 'cors';


import cadastroController from './controller/cadastroController.js'

const servidor = express();
        servidor.use(cors())
        servidor.use(express.json())


    servidor.use(cadastroController);


const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`API subiu na PORTA ${PORTA}`))

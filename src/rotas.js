import cadastroController from './controller/cadastroController.js'

export default function adicionarRotas(servidor){

servidor.use(cadastroController);

}
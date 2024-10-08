import loginController from './controller/loginController.js'

export default function adicionarRotas(servidor){

servidor.use(loginController);

}
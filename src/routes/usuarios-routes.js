import { Router } from 'express'
import { UsuarioController } from '../controllers/Usuario-controller.js'


// Rotas de conexão do Servidor
const router = Router()

router.get('/usuarios', UsuarioController.Index);
router.get('/usuarios/:id', UsuarioController.IndexId);
router.post('/usuarios', UsuarioController.Register);
router.post('/login', UsuarioController.login);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

export default router



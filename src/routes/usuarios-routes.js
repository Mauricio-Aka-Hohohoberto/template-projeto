import { Router } from 'express'
import { UsuarioController } from '../controllers/Usuario-controller.js'
import { authMiddleware } from '../middlewares/auth-middleware.js';


// Rotas de conexão do Servidor
const router = Router()

router.get('/usuarios', authMiddleware, UsuarioController.Index);
router.get('/usuarios/:id', authMiddleware, UsuarioController.IndexId);
router.post('/usuarios', UsuarioController.Register);
router.post('/login', UsuarioController.login);
router.put('/usuarios/:id', authMiddleware, UsuarioController.Update);
router.delete('/usuarios/:id', authMiddleware, UsuarioController.Delete);

export default router



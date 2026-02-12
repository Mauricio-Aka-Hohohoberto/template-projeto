import { Router } from 'express'
import { UsuarioController } from '../controllers/Usuario-controller.js'

const router = Router()

router.get('/usuarios', UsuarioController.Index);
router.get('/usuarios/:id', UsuarioController.IndexId);
router.post('/usuarios', UsuarioController.Register);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

export default router



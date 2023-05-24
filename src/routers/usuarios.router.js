import { Router } from 'express'
import { postUsuariosController } from '../controllers/logeo-usuarios/usuarios.controller.js'

export const usuariosRouter = Router()

usuariosRouter.post('/', postUsuariosController)
import { User } from '../models/entidades/User.js'
import { usuariosManager } from '../repositories/Managers/UserManager.js'
import { criptografiador } from '../services/utils/bcrypt.js'

export async function postUsuariosController(req, res, next) {
    const datosUsuario = req.body
    console.log(datosUsuario)

    try {
        datosUsuario.password = criptografiador.hashear(datosUsuario.password)
        //console.log(datosUsuario.password)
        //const usuario = new User(datosUsuario)
        //console.log(usuario.datos())
        const usuarioGuardado = await usuariosManager.guardar(datosUsuario)

        const token = criptografiador.generarToken(usuarioGuardado)
        res.cookie('authToken', token, { httpOnly: true, signed: true, maxAge: 1000 * 60 * 60 * 24 })

        res.status(201).json(usuarioGuardado)
    } catch (error) {
        next(error)
    }
}
import { Usuario } from "../models/usuarios.js";
import { UsuarioRepository } from "../repositories/usuario-repository.js";
import { UsuarioService } from "../Service/service.js"


// Exportador da efetuação e Verificação da ação

export class UsuarioController {
    static async Index(req, res) {

        const usuarios = await UsuarioService.exibirUsuarios()
        res.status(200).json(usuarios);
    }
    static async IndexId(req, res) {

        const id = parseInt(req.params.id)
        const usuario = await UsuarioService.exibirUsuario(id)
        res.status(200).json(usuario)

    }
    static async login(req, res) {
        const { email, senha } = req.body
        
        const token = await UsuarioService.login(email, senha)

            res.status(200).json({ token })

    }
    static async Register(req, res) {

        const { nome, email, senha } = req.body;
        const novoUsuario = await UsuarioService.registrarUsuario(nome, email, senha)
        res.status(201).json(novoUsuario)


    }
    static async Update(req, res) {
        const id = req.params.id
        const { nome, email, senha } = req.body;

        const atualizar = await UsuarioService.update(id, nome, email, senha)

        res.status(200).json(atualizar)
    }
    static async Delete(req, res) {
        const id = parseInt(req.params.id);
        await UsuarioService.delete(id)
        res.status(200).send()
    }
}
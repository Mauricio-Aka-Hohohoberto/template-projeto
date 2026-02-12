import { Usuario } from "../models/usuarios.js";
import { UsuarioRepository } from "../repositories/usuario-repository.js";


export class UsuarioController {
    static async Index(req, res) {
        const usuarios = await UsuarioRepository.buscarTodos()
        res.status(200).json(usuarios);
    }
    static async IndexId(req, res) {
        const id = parseInt(req.params.id)
        const usuario = await UsuarioRepository.buscarPorId(id)

        if(!usuario) {
            res.status(404).send('Usuário não encontrado');
            return;
        }

        res.status(200).json(usuario)
    }

    static async Register(req, res) {
        const { nome, email, senha } = req.body;
        
        if (!nome || !email || !senha) {
            res.status(400).send('Todos os campos são obrigatórios!')
            return;
        }

        const usuario = new Usuario(null, nome, email, senha);
        const registro = await UsuarioRepository.inserirUsuario(usuario);

        res.status(201).json(registro);
    }
    static async Update(req, res) {
        const id = parseInt(req.params.id);
        const { nome, email, senha } = req.body;
        const usuario = new Usuario(id, nome, email, senha);
        const atualizar = await UsuarioRepository.atualizarUsuario(id, usuario)

        if (!atualizar) {
            res.status(404).send('Usuário não encontrado')
            return;
        }

        res.status(200).json(atualizar)
    }
    static async Delete(req, res) {
        const id = parseInt(req.params.id);
        const del = await UsuarioRepository.excluirUsuario(id);

        if (!del) {
            res.status(404).send('Usuário não encontrado')
            return;
        }

        res.status(200).json(del)
    }
}
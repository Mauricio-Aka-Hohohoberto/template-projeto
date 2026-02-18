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
        
        const usuariologado = await UsuarioService.login(email, senha)

            res.status(200).json({ message: 'Usuario logado com sucesso!'})

    }
    static async Register(req, res) {

        const { nome, email, senha } = req.body;
        const novoUsuario = await UsuarioService.registrarUsuario(nome, email, senha)
        res.status(201).json(novoUsuario)


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
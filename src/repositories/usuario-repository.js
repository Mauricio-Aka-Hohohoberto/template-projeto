import { connection } from '../config/database.js'
import { Usuario } from '../models/usuarios.js'


// Exportador da Lógica da ação efetuada

export class UsuarioRepository {
    static async buscarTodos() {
        const [results] = await connection.query('SELECT * FROM usuarios');
        return results.map(u => new Usuario(u.id, u.nome, u.email, u.senha))
    }

    static async buscarPorId(id) {
        const[result] = await connection.query('SELECT * FROM usuarios WHERE id = ?', [id])

        if (result.length === 0) return null
        const u = result[0]
        return new Usuario(u.id, u.nome, u.email, u.senha)
    }
    static async buscarPorEmail(email) {
        const[result] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email])

        if (result.length === 0) return null
        const u = result[0]
        return new Usuario(u.id, u.nome, u.email, u.senha)
    }
    static async inserirUsuario(usuario) {
        const { nome, email, senha } = usuario

        const [result] = await connection.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha])

        return new Usuario(result.insertId, nome, email, senha)
    }

    static async atualizarUsuario(id, usuario) {
        const { nome, email, senha } = usuario

        const [result] = await connection.query('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id])

        if (result.affectedRows === 0) return null

        return new Usuario(id, nome, email, senha)
    }

    static async excluirUsuario(id) {
        const [result] = await connection.query('DELETE FROM usuarios WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}
import { JWT_SECRET } from "../config/env-config.js";
import jwt from 'jsonwebtoken'
import { AppError } from '../Errors/error-handler.js'

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError('Token não fornecido.', 401)
    }

    const[, token] = authHeader.split(' ')

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next()
    } catch {
        throw new AppError('Token inválido ou expirado.', 401)
    }
}
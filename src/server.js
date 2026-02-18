import express from 'express'
import cors from 'cors'
import { PORT } from './config/env-config.js'
import usuarioRoutes from './routes/usuarios-routes.js'
import { errorMiddleware } from './middlewares/errormiddleware.js'


// Integrador do Servidor e tudo que há nele

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(usuarioRoutes)
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
import express from 'express'
import cors from 'cors'
// AAAAAAAAAAAAAAAAAAAAAAAAA
import dotenv from 'dotenv'

import { PORT } from './config/envconfig.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: True }))
app.use(cors())

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
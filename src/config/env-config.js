import dotenv from 'dotenv'

dotenv.config()

// Exportador do protetor dos dados do Servidor

export const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, PORT } = process.env
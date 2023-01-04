import { config } from './config.js'
import mysql from 'mysql2/promise'

export const connect = async () => {
  return await mysql.createConnection(config.url)
}


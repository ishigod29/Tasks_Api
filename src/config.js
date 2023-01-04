import { config as dotenv } from 'dotenv'
dotenv()

export const config = {
  url: process.env.URL,
  port: process.env.PORT
} 

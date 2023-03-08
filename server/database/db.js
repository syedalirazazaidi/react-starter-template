import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const Connection = () => {
  const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.wtb3cv8.mongodb.net/?retryWrites=true&w=majority`
  const options = { useNewUrlParser: true }
  mongoose.connect(uri, options)
  mongoose.connection.on('connected', () => {
    console.log('DATABASE CONNECTED SUCCESSFULLY')
  })
  mongoose.connection.on('disconnected', () => {
    console.log('DATA BASE disconnected')
  })
  mongoose.connection.on('error', () => {
    console.log('DATA BASE ERROR', error.message)
  })
}
export default Connection

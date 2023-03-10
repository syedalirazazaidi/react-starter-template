import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Routes from './routes/routes.js'
import Connection from './database/db.js'

const app = express()

app.use(cors())

app.use(bodyParser.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes)
const PORT = 8000
Connection()
app.listen(PORT, () => {
  console.log('port listening to', PORT)
})

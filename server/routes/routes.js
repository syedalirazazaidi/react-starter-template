import express from 'express'
import { addTodo } from '../controller/addtodoController.js'
import { getAllTodos } from '../controller/gettodoController.js'
const route = express.Router()

route.post('/todos', addTodo)

route.get('/todos', getAllTodos)

export default route

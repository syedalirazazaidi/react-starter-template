import express from 'express'
import { addTodo } from '../controller/addtodoController.js'
import { getAllTodos, updateTodos } from '../controller/gettodoController.js'
const route = express.Router()

route.post('/todos', addTodo)

route.get('/todos', getAllTodos)

route.put('/todos/:id', updateTodos)

export default route

import Todo from '../model/todo.js'
export const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      title: request.body.title,
      description: request.body.description,
      createdAt: Date.now(),
    })
    newTodo.save()
    response.status(200).json(newTodo)
  } catch (error) {
    return response.status(500).json(error.message)
  }
}

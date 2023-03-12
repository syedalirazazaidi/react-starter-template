import Todo from '../model/todo.js'
export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 })

    response.status(200).json(todos)
  } catch (error) {
    return response.status(500).json(error.message)
  }
}
export const updateTodos = async (request, response) => {
  console.log(request.body)
  try {
    // const todos = await Todo.findOneAndUpdate{
    //   // _id:
    // }

    response.status(200).json(todos)
  } catch (error) {
    return response.status(500).json(error.message)
  }
}

import Todo from '../model/todo.js'
export const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 })

    response.status(200).json(todos)
  } catch (error) {
    return response.status(500).json(error.message)
  }
}
export const updateTodos = async (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: 'updated successfully', data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: 'Failed to update todo', error: err.message }),
    )
}

// export const updateTodos = async (request, response) => {
//   const { id } = request.params
//   const { title, description } = request.body
//   // const { title, description } = request.body
//   console.log(id, title, description)
//   // console.log(request.body, '::')
//   try {
//     const updatedTask = await Todo.findByIdAndUpdate(
//       id,
//       {
//         title,
//         description,
//       },
//       { new: true },
//     )
//     return response.status(200).json(updatedTask)
//   } catch (error) {
//     return response.status(500).json(error.message)
//   }
//   // const updatedPost = { title, description, _id: id }
//   // const newTodo = await Todo.findByIdAndUpdate(id, updatedPost, {
//   //   new: true,
//   // })
//   // console.log(newTodo, ':::^^^')
//   // res.status(200).json(updatedGoal)
//   // await Todo.findByIdAndUpdate(
//   //   request.params.id,
//   //   {
//   //     title: request.body.title,
//   //     description: request.body.title,
//   //   },
//   // )
//   // const updatedobj = await Todo.findById(request.params.id)
//   // console.log(updatedobj, 'request.body.title')
//   // return response.status(200).json(updatedobj)
//   // const updatedTodo = { title, description, _id: id }
//   // const newdatt = await PostMessage.findByIdAndUpdate(id, updatedTodo, {
//   //   new: true,
//   // })
//   // console.log(newdatt, '::::')
//   // response.status(200).json(updatedTodo)
//   // } catch (error) {
//   //   return response.status(500).json(error.message)
//   // }
// }

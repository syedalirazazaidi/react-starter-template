import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const todo = mongoose.model('todoNew', TodoSchema)

export default todo

const Todo = require('../models/todoModel')
const mongoose = require('mongoose')

// get all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos)
}

// get a single todo
const getTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Todo' })
  }

  const todo = await Todo.findById(id)

  if (!todo) {
    return res.status(404).json({ error: 'No such Todo' })
  }

  res.status(200).json(todo)
}

// create a new todo
const createTodo = async (req, res) => {
  const { title, description, number } = req.body;
  try {
    const todo = await Todo.create({ title, description, number });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Todo" })
  }

  const todo = await Todo.findOneAndDelete({ _id: id })

  if (!todo) {
    return res.status(400).json({ error: 'No such Todo' })
  }

  res.status(200).json(todo)
}

// update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Todo" })
  }

  const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!todo) {
    return res.status(400).json({ error: 'No such Todo' })
  }
  res.status(200).json(todo)

}
module.exports = {
  createTodo,
  getTodos,
  getTodo,
  deleteTodo,
  updateTodo
}
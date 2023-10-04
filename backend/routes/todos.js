const express = require('express')

const {
  createTodo,
  getTodo,
  getTodos
} = require('../controllers/TodoController')

const router = express.Router();

// GET   all todos
router.get('/', getTodos)

// GET a single todo
router.get('/:id', getTodo)

// POST a new todo
router.post('/', createTodo)

// DELETE a todo
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a todo' })
})

// UPDATE a todo
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a todo' })
})


module.exports = router
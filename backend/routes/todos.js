const express = require('express')

const router = express.Router();

// GET   all todos
router.get('/', (req, res) => {
  res.json({ msg: 'get all todos' })
})

// GET a single todo
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single todo' })
})

// POST a new todo
router.post('/', (req, res) => {
  res.json({ msg: 'POST a new todo' })
})

// DELETE a todo
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a todo' })
})

// UPDATE a todo
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a todo' })
})


module.exports = router
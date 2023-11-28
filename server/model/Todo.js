const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

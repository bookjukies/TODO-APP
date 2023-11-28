require("dotenv").config();
const express = require('express')
const server = express()
const cors = require("cors")
const mongoose = require('mongoose')
const connectDB = require('./configure/dbConn')
const Todo = require("./model/Todo")

server.use(express.json())
server.use(cors({
    origin: "*"
}))

connectDB()

server.get("/todos/", async(req, res)=>{
    try {
        const todos = await Todo.find();
        res.json(todos);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching todos' });
      }
})

server.get("/todos/:id", async(req, res)=>{

    const todoId = req.params.id;

  try {
    const todo = await Todo.find({ id: todoId });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching todo' });
  }
})


  
  server.post("/todos", async (req, res) => {
    const id = new mongoose.Types.ObjectId();
    const { title, content, completed } = req.body;
  
    try {
      const newTodo = new Todo({ title, content, completed, id });
      await newTodo.save();
  
      res.status(201).json(newTodo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating todo' });
    }
  });

server.delete("/todos/:id", async(req, res)=>{
    const todoId = req.params.id;

    try {
        await Todo.findOneAndDelete({ id: todoId });
      res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting todo' });
    }
})

server.put('/todos/:id', async(req, res) => {
   const todoId = req.params.id;
  const { title, content, completed } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(todoId, { title, content, completed }, { new: true });
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating todo' });
  }
  });

  server.get("/test", async(req,res)=>{
    const id = new mongoose.Types.ObjectId();
    console.log(newObjectId.toString());
    res.send("halo")
  })

// server.listen(8000, ()=>{
//     console.log("The app is running on port 8000");
// })

mongoose.connection.once('open', ()=>{
    //starting the server
    server.listen(8000, ()=>{
        console.log("The app is running on port 8000");
    })
})
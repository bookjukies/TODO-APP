const express = require('express')
const server = express()
const cors = require("cors")

server.use(express.json())
server.use(cors({
    origin: "*"
}))

let todos = [
    { id: 1, content: "This is the todo's content",title: 'Buy groceries', completed: false },
    { id: 2, content: "This is the todo's content",title: 'Complete homework', completed: true },
    { id: 3, content: "This is the todo's content",title: 'Go for a run', completed: false },
  ];

server.get("/todos/", async(req, res)=>{
    res.json(todos)
})

server.get("/todos/:id", async(req, res)=>{
    const todoId = req.params.id

    const todo = todos.find(todo => todo.id === parseInt(todoId));

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }

    res.json(todo);
})

server.post("/todos", async(req, res)=>{
    const { title, content, completed } = req.body;
    const newTodo = { id: todos.length + 1, title, content, completed };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

server.delete("/todos/:id", async(req, res)=>{
    const todoId = req.params.id
    todos = todos.filter(todo => todo.id !== parseInt(todoId));
    res.json({ message: 'Todo deleted successfully' });
})

server.put("/update", async(req, res)=>{
    res.send("item deleted")
})

server.listen(8000, ()=>{
    console.log("The app is running on port 8000");
})
const express = require('express')
const server = express()

server.use(express.json())

server.get("/todos/", async(req, res)=>{
    res.send("all todos")
})

server.get("todos/:id", async(req, res)=>{
    res.send("single to do")
})

server.post("/todos/create", async(req, res)=>{
    res.send("todo created")
})

server.delete("/delete", async(req, res)=>{
    res.send("todo deleted")
})
server.put("/update", async(req, res)=>{
    res.send("item deleted")
})

server.listen(8000, ()=>{
    console.log("The app is running on port 8000");
})
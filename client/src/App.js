import { useEffect } from "react";
import axios from "axios"
import { Routes, Route, useLocation } from "react-router-dom"; 
import Todo from "./features/todo/Todo";
import TodoEdit from "./features/todo/TodoEdit";
function App() {
  




return(
  <div>
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/edit/:id" element={<TodoEdit />}/>
    </Routes>
  </div>
)
}

export default App;

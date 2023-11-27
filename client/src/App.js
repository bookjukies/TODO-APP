import { useEffect } from "react";
import axios from "axios"
import Todo from "./features/todo/Todo";
function App() {
  
  // useEffect(()=>{
  //   getTodos()
  // },[])

  // async function getTodos (){
  //   const todos = (await axios.get("http://localhost:8000/todos/")).data
  //   console.log(todos);
  // }
  
return(
  <div>
    <Todo />
  </div>
)
}

export default App;

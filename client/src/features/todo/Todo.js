import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTodos } from "./todoSlice";
import AddTodoForm from "./AddTodoForm";

function Todo() {
  const todos = useSelector (selectAllTodos );

  const renderedTodos = todos.map((todo) => (
      <article key={todo.id}>
        <h2>{todo.title}</h2>
      </article>
    ));

  return (
    <>
      <h1>Todo App</h1>
      <AddTodoForm />
      {renderedTodos}
    </>
  );
}

export default Todo;

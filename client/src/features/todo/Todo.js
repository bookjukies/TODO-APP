import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTodos, fetchTodos } from "./todoSlice";
import AddTodoForm from "./AddTodoForm";

function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    // Dispatch the async thunk when the component mounts
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const renderedTodos = todos.map((todo) => (
    <article key={todo.id}>
      <h2>{todo.title}</h2>
    </article>
  ));

  return (
    <>
      <h1>Todo App</h1>
      {/* <a href="https://aniwave.to/updated"  target="_blank" rel="noopener noreferrer">go</a> */}
      <AddTodoForm />
      {renderedTodos}
    </>
  );
}

export default Todo;

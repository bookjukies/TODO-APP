import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodoAsync } from "./todoSlice";
import axios from "axios";

function TodoEdit() {
const dispatch = useDispatch();
const navigate = useNavigate();

  const [todoItem, setTodoItem] = useState({});
  const [editableTitle, setEditableTitle] = useState("");
  const [editableContent, setEditableContent] = useState("");
  const [editableCompleted, setEditableCompleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getTodoItem();
  }, []);

  const getTodoItem = async () => {
    const res = (await axios.get(`http://localhost:8000/todos/${id}`)).data;
    setTodoItem(res);

    // Set the initial values for the editable fields
    setEditableTitle(res.title);
    setEditableContent(res.content);
    setEditableCompleted(res.completed);
  };

  const handleTitleChange = (e) => {
    setEditableTitle(e.target.innerText);
  };

  const handleContentChange = (e) => {
    setEditableContent(e.target.innerText);
  };

  const handleCompletedChange = () => {
    setEditableCompleted(!editableCompleted);
  };

  const handleSave = async () => {
    // Assuming you have a server endpoint for updating todos
    try {
        dispatch(editTodoAsync({
    id,
      title: editableTitle,
      content: editableContent,
      completed: editableCompleted,
    }))

    navigate('/')
        
    } catch (error) {
        console.error('Failed to save the post', error)
    }
    

  };

  return (
    <>
      {todoItem && todoItem.title ? (
        <div>
          <div>
            <label>Title: </label>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={handleTitleChange}
            >
              {editableTitle}
            </div>
          </div>
          <div>
            <label>Content: </label>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={handleContentChange}
            >
              {editableContent}
            </div>
          </div>
          <div>
            <label>Completed: </label>
            <input
              type="checkbox"
              checked={editableCompleted}
              onChange={handleCompletedChange}
            />
          </div>
          <button onClick={handleSave}>Save Changes</button>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}

export default TodoEdit;

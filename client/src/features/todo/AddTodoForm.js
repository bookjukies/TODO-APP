import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from './todoSlice'

function AddTodoForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    //event handlers
    const onTitleChanged = e  => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    

    const onSaveTodoClicked = () =>{
        if(title && content){
            dispatch(
                todoAdded(title, content)
            )

            setTitle('')
            setContent('')
        }
    } 

    const canSave = Boolean(title) && Boolean(content)
  return (
    <section> 
        <form>
            <label htmlFor="todoTitle">Todo Title</label>
            <input 
                type="text"
                id="todoTitle"
                name="todoTitle"
                value={title}
                onChange={onTitleChanged}
            />

            <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

            <button type="button" disabled={!canSave} onClick={onSaveTodoClicked}>
                Save Todo
            </button>
        </form>

    </section>
  )
}

export default AddTodoForm
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAsync } from './todoSlice'
import './../../styles/AddTodoForm.scss'

function AddTodoForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const completed = true
    const dispatch = useDispatch()

    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    //event handlers
    const onTitleChanged = e  => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const canSave = Boolean(title) && Boolean(content) && addRequestStatus === 'idle'
    

    const onSaveTodoClicked = () =>{
        if(canSave){
            try {
                setAddRequestStatus('pending')
                dispatch(
                    addTodoAsync({title, content, completed})
                )
    
                setTitle('')
                setContent('')
                
            } catch (error) {
                console.error('Failed to save the post', error)
            } finally {
                setAddRequestStatus('idle')
            }
            
        }
    } 

    
  return (
    <section className='inputContainer'> 
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

            <button type="button" disabled={!canSave} className="saveButton" onClick={onSaveTodoClicked}>
                Save Todo
            </button>
        </form>

    </section>
  )
}

export default AddTodoForm
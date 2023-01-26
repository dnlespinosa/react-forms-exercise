import React, {useState} from 'react'
import uuid from 'uuid/v4'

const NewTodoForm = ({ addTodo }) => {
    const INTIALSTATE = [{
        name:''
    }]
    const [formData, setFormData] = useState(INTIALSTATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value, 
            id: uuid()
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(formData.name)
        setFormData(INTIALSTATE)

    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor='todo'>Todo</label>
            <input type='text' 
            id='todo'
            name='todo' 
            placeholder='Add your todo ehre' 
            value={formData.name}
            onChange={handleChange}/>
            <button>Add todo</button>
        </form>
    )
}

export default NewTodoForm


// NewTodoForm - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created. - Todo- this component should display a div with the task of the todo.
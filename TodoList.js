import React, {useState} from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = () => {
    const INTIALSTATE = [{
        name: 'Do Homework'
    }]
    const [todos, setTodos] = useState(INTIALSTATE)
    const addTodo = (newTodo) => {
        setTodos(todos => {
            return [...todos, {newTodo}]
        })
    }

    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ todo, remove }) => {
                    <Todo todo={todo} remove={remove}/>
                })}
            </div>
        </div>
    )
}

export default TodoList
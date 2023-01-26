import React, {useState} from 'react'

const Todo = ({ todo, remove }) => {

    const removeTodo = () => {
        remove(id);
    }

    return (
        <div>
            <h1>{todo}</h1>
            <button onClick={removeTodo}>Remove Me When Done</button>
        </div>
    )
}

export default Todo
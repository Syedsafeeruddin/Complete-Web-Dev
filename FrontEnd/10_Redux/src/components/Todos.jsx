import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

  return (
    <>
        <div>My Todos</div>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                >                   -------------------X</button>
            </li>
        ))}
    </>
  )
}

export default Todos
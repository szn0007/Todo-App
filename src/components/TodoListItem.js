import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo, removeTodoDispatch, markCompleteTodoDispatch }) => {
  const removeTodo = () => {
    removeTodoDispatch(todo.id)
  }

  const markCompleteTodo = () => {
    markCompleteTodoDispatch(todo.id)
  }

  return (
    <div className="todo-item-container">
      <h3>{ todo.text }</h3>

      <div className="buttons-container">
        {
          todo.isCompleted ? null : <button className="completed-button" onClick={markCompleteTodo}>Mark as completed</button>
        }
        <button className="remove-button" onClick={removeTodo}>Remove</button>
      </div>
    </div>
  )
}

export default TodoListItem

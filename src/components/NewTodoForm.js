import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { createTodo } from '../store/actions'
import { createNewTodo } from '../thunks'
import './NewTodoForm.css'

const NewTodoForm = ({ todos, createTodoDispatch }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onCreateTodoClicked = () => {
    const isDuplicateTodo = todos.some(todo => todo.text === inputValue)
    if (!isDuplicateTodo) {
      createTodoDispatch(inputValue)
      setInputValue('')
    } else {
      alert('Todo Already exists')
    }
  }

  return (
    <div className="new-todo-form">
      <input type="text"
      className="new-todo-input"
      placeholder="Enter your new todo"
      value={inputValue}
      onChange={onInputChange}
      />
      <button
      className="new-todo-button"
      onClick={onCreateTodoClicked}
      >
        Create Todo
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  createTodoDispatch: text => dispatch(createNewTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
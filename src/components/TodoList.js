import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './TodoList.css'
import { loadTodos, removeTodoRequest, markCompleteRequest } from '../thunks'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList = ({ todos, removeTodoDispatch, markCompleteTodoDispatch, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loadingMessage = <div>Please wait. Todos are loading.......</div>
  const content = ( <div className="list-wrapper">
    <NewTodoForm />
    {
      todos.map(todo => (
        <TodoListItem
        todo={todo}
        key={todo.text}
        removeTodoDispatch={removeTodoDispatch}
        markCompleteTodoDispatch={markCompleteTodoDispatch}
        />
      ))
    }
  </div>)
  return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  removeTodoDispatch: id => dispatch(removeTodoRequest(id)),
  markCompleteTodoDispatch: id => dispatch(markCompleteRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

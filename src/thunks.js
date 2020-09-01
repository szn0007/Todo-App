import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markCompleteTodo
} from './store/actions'

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress())
    const res = await fetch('http://localhost:8080/todos')
    const todos = await res.json()

    dispatch(loadTodosSuccess(todos))
  } catch (e) {
    dispatch(loadTodosFailure())
    dispatch(displayAlert(e))
  }
}

export const createNewTodo = text => async dispatch => {
  try {
    const body = JSON.stringify({ text })
    const res = await fetch('http://localhost:8080/todos',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body
      }
    )
    const todo = await res.json()
    dispatch(createTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const removeTodoRequest = id => async dispatch => {
  try{
    const res = await fetch(`http://localhost:8080/todos/${id}`,
      {
        method: 'delete'
      }
    )
    const removedTodo = await res.json()
    dispatch(removeTodo(removedTodo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const markCompleteRequest = id => async dispatch => {
  try {
    const res = await fetch(`http://localhost:8080/todos/${id}/completed`,
      {
        method: 'post'
      }
    )
    const todo = await res.json()
    dispatch(markCompleteTodo(todo))
  } catch (e) {
    dispatch(displayAlert(e))
  }
}

export const displayAlert = text => () => {
  alert(text)
}
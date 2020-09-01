import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE
} from './actions'

export const isLoading = (state = false, action) => {
  const { type } = action
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:  
      return false
    default:
      return state
  }
}

export const todos = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload
      return state.concat(todo)
    }
    case REMOVE_TODO: {
      const { todo } = payload
      return state.filter(item => item.id !== todo.id)
    }
    case MARK_COMPLETE_TODO: {
      const { todo } = payload
      return state.map(item => {
        if (item.id === todo.id) {
          return todo
        }
        return item
      })
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload
      return todos
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state
  }
}
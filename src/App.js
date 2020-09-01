import React from 'react'
import { hot } from 'react-hot-loader'
import './App.css'
import TodoList from './components/TodoList'

const App = () => (
  <div className="app">
    <TodoList />
  </div>
)

export default hot(module)(App)
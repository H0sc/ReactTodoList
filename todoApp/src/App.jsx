import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='appContainer'>
      <h1>Todo App!</h1>
      <InputField />
      <TodoList />
    </div>
  )
}

export default App

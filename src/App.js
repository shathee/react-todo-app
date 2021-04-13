import {useState} from 'react';
import './App.css';

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To Do Application</h1>
      </header>
      <div className="todoContainer">
        <TodoList todos = {todos} />
        <AddTodo setTodos={setTodos} />
      </div>
    </div>
  );
}



export default App;

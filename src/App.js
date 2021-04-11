import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList'

function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To Do Application</h1>
      </header>
      <TodoList todos = {todos} />
    </div>
  );
}



export default App;

import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To Do Application</h1>
      </header>
      <TodoList />
    </div>
  );
}



export default App;

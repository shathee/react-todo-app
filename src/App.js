import {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {setIntialTodos} from './redux/actions'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
  const todos = useSelector( (state) => state.alltodos);
  const dispatch = useDispatch();
  const getToDos = () => {
    fetch("./data/data.json")
    .then(response => response.json())
    .then( data => dispatch(setIntialTodos(data))
    )
    .catch(err => {
      console.log(err);
    });
    
  }
    
  useEffect(() => {
    getToDos();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React To Do Application</h1>
      </header>
      <div className="todoContainer">
        <TodoList />
        {/* <AddTodo />  */}
      </div>
    </div>
  );
}



export default App;

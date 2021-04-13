
import classes from './AddTodo.module.css';
import {useRef} from 'react';

function AddTodo({setTodos}) {
    const inputRef = useRef();

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.todoName.value
        const todo = {
            id:'',
            text,
            done:false
        }
        setTodos(prevTodos => {
            todo.id = prevTodos.length + 1;
            return prevTodos.concat(todo)
        })
        inputRef.current.value = '';
    }
    

    return (
      <div className={classes.AddTodoDiv}>
        <form onSubmit={handleAddTodo}>
          <input name="todoName" placeholder="Add New todo to your list" ref={inputRef} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

  export default AddTodo;
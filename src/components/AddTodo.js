
import classes from './AddTodo.module.css';
import {useRef} from 'react';

function AddTodo({setTodos}) {
    const inputRef = useRef();
    const selRef = useRef();

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.todoName.value
        const done = event.target.elements.todoStatus.value
        const todo = {
            id:'',
            text,
            done
        }
        setTodos(prevTodos => {
            todo.id = prevTodos.length + 1;
            return prevTodos.concat(todo)
        })
        inputRef.current.value = '';
        selRef.current.value = false;
    }
    

    return (
      <div className={classes.AddTodoDiv}>
        <form onSubmit={handleAddTodo}>
          <input name="todoName" placeholder="Add New todo to your list" ref={inputRef} />
          <select name="todoStatus" ref={selRef}>
            <option value="false">Pending</option>
            <option value="true">Done</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

  export default AddTodo;
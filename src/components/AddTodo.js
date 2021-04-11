
import {useRef} from 'react';

function AddTodo({setTodos}) {
    const inputRef = useRef();

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.todoName.value
        const todo = {
            id:4,
            text,
            done:false
        }
        setTodos(prevTodos => {
            return prevTodos.concat(todo)
        })
        inputRef.current.value = '';
    }
    

    return (
      <form onSubmit={handleAddTodo}>
        <input name="todoName" placeholder="Add New todo to your list" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    );
  }

  export default AddTodo;
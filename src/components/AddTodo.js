function AddTodo({setTodos}) {
    
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
    }
    

    return (
      <form onSubmit={handleAddTodo}>
        <input name="todoName" placeholder="Add New todo to your list" />
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default AddTodo;
import classes from './TodoList.module.css'

function TodoList(props) {
    
    const todoList = props.todos.map( todo => (
        <li key={todo.id}>{todo.text} -> {todo.done ? "line-through" : "Pending"}</li>
    ));
    
    return (
        <div className={classes.TodoListDiv}>
            <ul>
                {todoList} 
            </ul>
        </div>
    );
}

export default TodoList
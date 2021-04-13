import classes from './TodoList.module.css'

function TodoList(props) {
    
    const todoList = props.todos.map( todo => (
        <tr><td key={todo.id}>{todo.text} </td><td> {todo.done ? "+line-through" : "Pending"}</td></tr>
    ));
    
    return (
        <div className={classes.TodoListDiv}>
            <table>
                <tr className={classes.tblHeader}><td>Task Name</td><td>Status</td></tr>
                {todoList} 
            </table>
        </div>
    );
}

export default TodoList
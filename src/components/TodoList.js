import classes from './TodoList.module.css'

function TodoList(props) {
    
    const todoList = props.todos.map( todo => (
        <tr key={todo.id}><td >{todo.text} </td><td> {todo.done ? "Done" : "Pending"}</td></tr>
    ));
    
    return (
        <div className={classes.TodoListDiv}>
            <table>
                <thead>
                    <tr className={classes.tblHeader}><td>Task Name</td><td>Status</td></tr>
                </thead>
                <tbody>
                    {todoList}
                </tbody> 
            </table>
        </div>
    );
}

export default TodoList
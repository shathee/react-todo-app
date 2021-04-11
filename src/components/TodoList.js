function TodoList(props) {
    const todoList = props.todos.map( todo => (
        <li key={todo.id}>{todo.text}</li>
    ));
    
    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default TodoList
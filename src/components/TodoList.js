import styled from 'styled-components'

const TodoListDiv = styled.div`
    background-color: #DED9E2;
    width:60%;
    justify-content: left;
    height: 70vh;
    
    & table {
        padding: 5px;
        width: 100%;
    }

    & tr td {
        padding:2px 5px 2px 5px;
        list-style: none;
        text-align: left;
    }

    & thead tr td{
        font-weight: bold;
    }

    button {
        min-height:30px;
    }

    @media (max-width: 600px){
        width:100%
    }
`;
const ArchiveButton = styled.button`
    background-color: #F5D5ED;
`;
const DoneButton = styled.button`
    background-color: #8CAE68;
`;


function TodoList(props) {
    function handleMarkAsDone(todo) {
        const updatedTodos = props.todos.map((t) =>
        t.id === todo.id
            ? {
                ...t,
                done: !t.done
            }
            : t
        );
        props.setTodos(updatedTodos);
    }    

    const todoList = props.todos.map( todo => (
        <tr key={todo.id}><td >{todo.text} </td><td>{ todo.done ?"Done" : "Pending"  }</td><td>{ todo.done ? <ArchiveButton>Archive</ArchiveButton> : <DoneButton onClick={() => handleMarkAsDone(todo)}>Mark as Done</DoneButton> }</td></tr>
    ));
    
    return (
        <TodoListDiv>
            <table>
                <thead>
                    <tr><td>Task Name</td><td>Status</td><td> Action</td></tr>
                </thead>
                <tbody>
                    {todoList}
                </tbody> 
            </table>
        </TodoListDiv>
    );
}

export default TodoList
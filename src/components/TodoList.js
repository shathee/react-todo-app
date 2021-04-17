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

    & .tblHeader td{
        font-weight: bold;
    }

    @media (max-width: 600px){
        width:100%
    }
`;

function TodoList(props) {
    console.log(props.todos) 
    const todoList = props.todos.map( todo => (
        <tr key={todo.id}><td >{todo.text} </td><td> { todo.done ? "Done" : <button>Mark as Done</button>}</td></tr>
    ));
    
    return (
        <TodoListDiv>
            <table>
                <thead>
                    <tr><td>Task Name</td><td>Status</td></tr>
                </thead>
                <tbody>
                    {todoList}
                </tbody> 
            </table>
        </TodoListDiv>
    );
}

export default TodoList
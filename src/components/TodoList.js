import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import {toogleTodo} from '../redux/actions'


const TodoListDiv = styled.div`
    background-color: #D5E68D;
    width:60%;
    justify-content: left;
    height: 70vh;
    
    & ul {
        display: flex;
        flex-flow:column;
        li {
            list-style:none;
            padding: 5px;
            div {
                width:50%;
                font-size: 1.5rem;
            }
        }
    }
    & .lst {
        display: flex;
        flex-flow:row;
    }
    button {
        min-height:30px;
    }

    @media (max-width: 600px){
        width:100%
    }
    & .done{
        text-decoration: line-through #6B0504;
    }
`;
const PendingButton = styled.button`
    background-color: #6B0504;
    width:70%;
    font-size: 1.2rem;
    color:#fefefe;
`;
const DoneButton = styled.button`
    font-size: 1.2rem;
    width:70%;
    background-color: #47A025;
`;


function TodoList(props) {
    const todos = useSelector( (state) => state.alltodos.todos);
    const dispatch = useDispatch();
    
    function handleMarkAsDone(todo) {
        dispatch(toogleTodo(todo));
    }    

    const todoList = todos.map( todo => (
        <li className='lst' key={todo.id}>
            <div className={todo.done ?"done" : "pending"}>{todo.text} </div>
            <div>{ todo.done ? <PendingButton onClick={() => handleMarkAsDone(todo)}>Mark as Pending</PendingButton> : <DoneButton onClick={() => handleMarkAsDone(todo)}>Mark as Done</DoneButton>}</div> 
        </li>
    ));
    
    return (
        <TodoListDiv>
            <ul>
                   {todoList}
            </ul>
        </TodoListDiv>
    );
}

export default TodoList

import styled from 'styled-components';
import {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions'

const AddTodoDiv = styled.div`
  background-color: #D5E68D;
  width:40%;
  align-items: center;
  
  & form{
    width:60%;
    margin:auto;
    padding: 20px 10px 10px 20px;
    display:flex;
    flex-flow:column;
    justify-content:center;
  }

  & input{
    background-color: ${props => (props.invalid ? '#EBB9DF' : 'white')};
    border: 2px solid ${props => (props.invalid ? '#df5796' : '#ccc')};
    min-height: 30px;
    padding:2px 2px 0px 2px;
  }

  & select{
    min-height: 30px;
    padding:2px 2px 0px 2px;
  }

  & label{
    min-height: 30px;
    padding:2px 2px 0px 2px;
    text-align:left;
  }

  & button{
    width:50%;
    padding:2px 2px 0px 2px;
  }

  @media (max-width: 600px){
    width:100%;
  }

`;

function AddTodo() {
    const inputRef = useRef();
    const selRef = useRef();
    const [isValidText, setIsValidText] = useState(true);

    const todos = useSelector( (state) => state.alltodos.todos);
    const dispatch = useDispatch()

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.todoName.value
        const done = event.target.elements.todoStatus.value === "false" ? false : true

        if(text.trim().length === 0){
          setIsValidText(false);
          return;
        }
        const todo = {
            id: todos.length + 1,
            text,
            done:done
        }
        
        dispatch(addTodo(todo));
        setIsValidText(true);
        inputRef.current.value = '';
        selRef.current.value = false;
    }
    

    return (
      <AddTodoDiv invalid={!isValidText}>
        <form onSubmit={handleAddTodo}>
          <label>Add New To Do</label>
          <input name="todoName" placeholder="Add New todo to your list" ref={inputRef} />
          <label>Select the status of the toDo</label>
          <select name="todoStatus" ref={selRef}>
            <option value="false">Pending</option>
            <option value="true">Done</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </AddTodoDiv>
    );
  }

  export default AddTodo;
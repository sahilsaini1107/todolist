import React from 'react'

const Form = ({ inputText,setInputText , filteredTodos, todos, setTodos, setStatus }) => {

    const inputTextHandler =(e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);//stores the input value and we can use it when we want
    };
    const submitTodoHandler =(e) =>{
        e.preventDefault();// prevent page from refreshing
    setTodos([
        ...todos,
        {text: inputText, completed: false, id:Math.random()*1000

        }
    ]); 
    setInputText("");//set input block back to empty
    };
    const statusHandler =(e)=>{
       setStatus(e.target.value);
    };
    return (
       
        <form>
            <input  value={ inputText } onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>  
        
    )
}

export default Form

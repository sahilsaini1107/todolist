import React from 'react';
import Todo from './Todo';
const TodoList = ({todos , setTodos, filteredTodos}) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
{/* using curly{} means i can writejs code here todos.map help to take all inpur which are stored in form odf array */}
                  {filteredTodos.map(todo =>(
                    <Todo todos={todos}
                     setTodos={setTodos}
                     todo={todo} 
                     key={todo.id} 
                     text={todo.text}/>
                  ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList

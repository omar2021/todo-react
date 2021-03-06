import React from 'react';

const Todo = ({text, setTodos, todos, todo}) => {
    //event
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    //check over each item
    const completeHandler = () => {
        setTodos(todos.map(items => {
            if(items.id === todo.id){
                return {
                    ...items, completed: !items.completed
                }
            }
            return items;
        })
        );
    }
    return(
        <div className = "todo">
            <li className = { `todo-item ${ todo.completed ? "completed":""}` }>
                {text}
            </li>
            <button onClick={completeHandler} className = "complete-btn"> 
                <i className = "fas fa-check"></i> 
            </button>
            <button onClick={deleteHandler} className = "trash-btn"> 
                <i className = "fas fa-trash"></i>
            </button>
        </div>
    );
       
};

export default Todo;
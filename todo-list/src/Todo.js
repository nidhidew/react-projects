import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [editMode,setEditMode] = useState(false);
  const [editId,setEditId] = useState(null);
  const [editValue,setEditValue] = useState('');
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime,
        text: inputValue,
      };
      setTodo([...todo, newTodo]);
      setInputValue([""]);
    }
  };
  const deleteTodo = (id) => {
    const updateTodo = todo.filter((todo) => todo.id !== id);
    setTodo(updateTodo);
  };
  const editTodo = (id,text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  }
  const updateTodo = () => {
    // const updateTodos = todo.map((todo)
    // => {
    //   if(todo.id == editId){
    //     return {...todo,text:editValue}
    //   }
    // }
    // )
  }
  return (
    <div className="todo-container">
      <h2>TODO List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id,todo.text)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

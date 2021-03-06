import Header from "./component/header"
import './App.css';

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import TodoList from "./component/header/TodoList";

function App() {
  var [todos, setTodos] = useState([]);

  function addTodo(todo) {
    // need to prevent adding duplicate items
    todo.task = todo.task.trim();
    let found = todos.find(item => item.task === todo.task)
    if(found)
      alert("Cannot add duplicate item")
    else 
      setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function editTodo(str, id) {
    todos = todos.filter(todo => todo.id !== id);
    var item = {
      id: Date.now(),
      task: str,
      completed: false
    };
      addTodo(item); 
    
  }

  return (

    <div className="App">
      <Header addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={deleteTodo}
        editTodo={editTodo}
      />


    </div>

  );
}




// export default function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <TextField id="standard-basic" label="Standard" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </form>
//   );
// }

export default App;

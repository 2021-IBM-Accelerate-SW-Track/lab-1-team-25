import Header from "./component/header"
import './App.css';

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import TodoList from "./component/header/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id == id) {
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

  return (

    <div className="App">
      <Header addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={deleteTodo}
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

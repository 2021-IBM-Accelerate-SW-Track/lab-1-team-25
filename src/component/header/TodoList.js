import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        left: '20em',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
    },
}));

function TodoList({ todos, toggleComplete, removeTodo, editTodo }) {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} editTodo={editTodo} />
            ))}
        </List>
    );

}

export default TodoList;
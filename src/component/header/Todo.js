import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";


// Want to bring edit button closer to delete - this needs work
const ListItemWithWiderSecondaryAction = withStyles({
    secondaryAction: {
      paddingRight: 96,
      
    }
  })(ListItem);

function Todo({ todo, toggleComplete, removeTodo, editTodo}) {

    function clickCheckbox() {
        toggleComplete(todo.id);
    }

    function handleRemove() {
        removeTodo(todo.id);
    }

    function handleEdit() {
        var str = window.prompt("Update task: ");
        editTodo(str, todo.id);
    }

    let today = new Date(todo.id);
    return (
        <ListItem divider="true">
            <ListItemIcon>
              <Checkbox
                edge="start"
                onClick={clickCheckbox}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText
                primary={todo.task}
                secondary={today.toLocaleTimeString() + " -- " + today.toDateString()}
            />
            <ListItemWithWiderSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
            </ListItemWithWiderSecondaryAction>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleRemove}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;
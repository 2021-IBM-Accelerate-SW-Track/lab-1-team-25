import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

export default function Header({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function textChangeState(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: Date.now() });
            //reset
            setTodo({ ...todo, task: "" });
        }
    }

    const classes = useStyles();
    return (

        <div>
            <div style={{ fontSize: 50 }}>
                2021 IBM Accelerate Todo List
            </div>


            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                {/* <input

                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={textChangeState}
                /> */}
                <TextField
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={textChangeState}
                    id="standard-basic"
                    label="Enter Todo" />

                <Button type="submit" variant="contained" color="primary">
                    Add Todo
            </Button>
            </form>


        </div>
    );

}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
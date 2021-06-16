import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
    function clickCheckbox() {
        toggleComplete(todo.id);
    }

    function handleRemove() {
        removeTodo(todo.id);
    }

    let today = new Date(todo.id);
    return (
        <div style={{ display: "flex", textAlign: "left", justifyContent: "center" }}>
            <input type="checkbox" onClick={clickCheckbox} />
            <li
                style={{
                    color: "black",
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}--
                {today.toLocaleTimeString()}--{today.toDateString()} </li>
            <button onClick={handleRemove}>X</button>
            <button >Edit</button>
        </div>
    );
}

export default Todo;
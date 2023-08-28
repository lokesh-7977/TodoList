import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text: input,
    };

    props.onSubmit(newTask);

    setInput("");
  };

  return (
    <>
      <form>
        {props.edit ? (
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
        ) : (
          <input
            type="text"
            className="todo-input"
            placeholder="Add New Task"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
        )}
        <button onClick={handleSubmit} className="todo-button edit">
          {props.edit ? "Update" : "Add Todo"}
        </button>
      </form>
    </>
  );
}

export default TodoForm;

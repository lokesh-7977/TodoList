import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { BsBookmarkFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  
  const [bookmarkedTasks, setBookmarkedTasks] = useState([]);
  
  
  const [taskReminders, setTaskReminders] = useState({});

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  
  const toggleBookmark = (id) => {
    if (bookmarkedTasks.includes(id)) {
      setBookmarkedTasks(bookmarkedTasks.filter(taskId => taskId !== id));
     
    } else {
      setBookmarkedTasks([...bookmarkedTasks, id]);
      console.log("Bookmarks saved Successfully", bookmarkedTasks);
      alert("Bookmarks Saved Successfully")
    }
  };

  
  const setReminder = (id) => {
    alert("SetReminder saved:",setReminder);
    const currentTime = new Date().toLocaleString();
    setTaskReminders({
      ...taskReminders,
      [id]: currentTime,
      
    });
  };

 



  return (
    <>
      {edit.id && <TodoForm edit={edit} onSubmit={submitUpdate} />}
      {todos.map((todo) => (
        <div
          className={`todo-row ${todo.isComplete ? "complete" : ""}`}
          key={todo.id}
        >
          <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <BsBookmarkFill
              onClick={() => toggleBookmark(todo.id)}
              className={`bookmark-icon ${bookmarkedTasks.includes(todo.id) ? 'bookmarked' : ''}`}
            />
            <FaClock
              onClick={() => setReminder(todo.id)}
              className="clock-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
      
       
    </>
  );
}

export default Todo;

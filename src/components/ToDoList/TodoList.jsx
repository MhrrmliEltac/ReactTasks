import React from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  const [isAscending, setIsAscending] = React.useState(true);

  const addTask = (e) => {
    e.preventDefault();
    const task = document.getElementById("text");
    const text = task.value;
    if (text === "") {
      alert("Please enter a task.");
    } else {
      setTodos([...todos, text]);
      task.value = "";
    }
  };

  const deleteTask = (e) => {
    const text = e.target.parentElement.textContent;
    setTodos(todos.filter((item) => item !== text));
  };

  const sortedTask = () => {
    const sortedTodos = [...todos];
    sortedTodos.sort((a, b) => {
      return isAscending ? a.localeCompare(b) : b.localeCompare(a);
    });
    setIsAscending(!isAscending);
    setTodos(sortedTodos);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="upper"></div>
          <h1>To-Do List</h1>
          <div className="sorted">
            <i
              onClick={sortedTask}
              className="fa-solid filter fa-arrow-down-wide-short"
            ></i>
          </div>
          <div className="input">
            <i className="fa-solid cancel fa-trash-can"></i>
            <input className="text" type="text" name="text" id="text" />
          </div>
          {todos?.length > 0 ? (
            <ul id="text-content">
              {todos.map((item, index) => {
                return (
                  <li key={item + index}>
                    {item}
                    <i
                      className="fa-solid delete fa-xmark"
                      onClick={deleteTask}
                    ></i>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
          <button type="submit" className="button">
            <div className="plus_container">
              <i className="fa-solid plus fa-plus"></i>
            </div>
            <p className="button_text" onClick={addTask}>
              Əlavə et
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;

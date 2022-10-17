import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addTodo,
  deleteTodoCompleted,
  deleteTodoInCompleted,
  editTodoCompleted,
  editTodoInCompleted,
  moveToCompleted,
  moveToInCompleted,
} from "./redux/action";

function App() {
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  const [btnName, setBtnName] = useState("Add");
  const [edit, setEdit] = useState({});

  const editTodo = ([i, item], flag) => {
    setBtnName("Update");
    setInp(item);
    setEdit({ index: i, flag: flag });
  };
  const updateTodo = () => {
    setBtnName("Add");
    setInp("");
    if (edit.flag) {
      dispatch(editTodoInCompleted({ data: inp, index: edit.index }));
    } else {
      dispatch(editTodoCompleted({ data: inp, index: edit.index }));
    }
  };
  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <h3>Add Item</h3>
      <p>
        <input
          id="new-task"
          type="text"
          onChange={(e) => setInp(e.target.value)}
          value={inp}
        />
        {btnName === "Add" ? (
          <button onClick={() => inp!=='' && dispatch(addTodo(inp))}>{btnName}</button>
        ) : (
          <button onClick={updateTodo}>{btnName}</button>
        )}
      </p>

      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        {todo.incomplete.map((item, i) => (
          <li key={i}>
            <input
              type="checkbox"
              onClick={(e) => {e.preventDefault();dispatch(moveToCompleted(i))}}
            />
            <label>{item}</label>
            <input type="text" />
            <button className="edit" onClick={() => editTodo([i, item], true)}>
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {setBtnName('Add');dispatch(deleteTodoInCompleted(i))}}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3>Completed</h3>
      <ul id="completed-tasks">
        {todo.complete.map((item, i) => (
          <li>
            <input
              type="checkbox"
              checked
              onClick={(e) =>{ e.preventDefault();dispatch(moveToInCompleted(i))}}
            />
            <label>{item}</label>
            <input type="text" />
            <button className="edit" onClick={() => editTodo([i, item], false)}>
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {setBtnName('Add');dispatch(deleteTodoCompleted(i))}}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import ToDoList from "./components/TodoList";
import useArray from "./hooks/useArray";
import "./App.css";

function App() {
  const [ array, add ] = useArray();
  const [ input, setInput ] = useState("");
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    const updateTodos = () => {
      setTodos(array);
    }
    updateTodos();
  }
  , [array]);

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  }

  const handleTaskAdd = (e) => {
    e.preventDefault();
    add(input);
    setInput("");
  }

  return (
    <div className="App">
      <form onSubmit={ handleTaskAdd }>
        <input type="text" placeholder="Add todo list" value={ input } onChange={ handleInputChange }/>
        <button type="submit">Add</button>
      </form>
      <ToDoList tasks={ todos }/>
    </div>
  );
}

export default App;

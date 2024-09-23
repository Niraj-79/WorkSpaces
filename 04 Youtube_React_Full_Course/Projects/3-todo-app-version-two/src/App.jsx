import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/10/2024",
    },
    {
      name: "Go to college",
      dueDate: "04/10/2024",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItems} />
    </center>
  );
}

export default App;

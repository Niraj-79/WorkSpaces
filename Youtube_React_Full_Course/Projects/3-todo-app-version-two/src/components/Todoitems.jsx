import TodoItem from "./Todoitem";
import styles from "./Todoitems.module.css";

const TodoItems = ({ TodoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {TodoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;

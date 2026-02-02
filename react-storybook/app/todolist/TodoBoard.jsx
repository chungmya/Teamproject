import TodoItem from "./TodoItem";
import styles from "./todolist.module.scss";

function TodoBoard({ todoList, onUpdate, onDelete }) {
  return (
    <div className={styles.todoboard}>
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
						onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoBoard;

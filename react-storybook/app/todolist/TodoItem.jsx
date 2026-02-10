import { useState } from "react";
import styles from "./todolist.module.scss";

//컨포넌트 추가가
import { Button } from "../../components/Button/Button";
import { FiEdit, FiCheck, FiTrash } from "react-icons/fi";

function TodoItem(props) {
  const [completed, setCompleted] = useState(false);
  const todo = props.todo;

  const [isEditing, setIsEditng] = useState(false); //수정 모드
  const [editText, setEditText] = useState(todo.title); //새로 바뀔 텍스트

  return (
    <li className={styles.todoItem}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={completed ? styles.completed : ""}>
          {todo.title}
          {todo.id}
        </span>
      )}

      {!isEditing ? (
        <Button
          size="sm"
          variant="secondary"
          type="button"
          value="edit"
          onClick={() => setIsEditng(true)}
        >
          <FiEdit />
          수정
        </Button>
      ) : (
        <button
          type="button"
          value="save"
          onClick={() => {
            props.onUpdate(todo.id, editText);
            setIsEditng(false);
          }}
        >
          저장
        </button>
      )}

      <Button onClick={() => setCompleted(!completed)}>
        <FiCheck />
        완료
      </Button>

      <Button
        type="button"
        value="delete"
        onClick={() => {
          props.onDelete(todo.id);
        }}
      >
        <FiTrash />
        삭제
      </Button>
    </li>
  );
}

export default TodoItem;

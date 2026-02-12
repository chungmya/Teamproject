import { useState } from "react";
import styles from "./todolist.module.scss";

//컨포넌트 추가가
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";

//아이콘
import { FiEdit, FiCheck, FiTrash } from "react-icons/fi";

function TodoItem(props) {
  //완료 스타일 적용
  const [completed, setCompleted] = useState(false);
  const todo = props.todo;

  const [isEditing, setIsEditng] = useState(false); //수정 모드
  const [editText, setEditText] = useState(todo.title); //새로 바뀔 텍스트

  return (
    <li className={styles.todoItem}>
      <div className={styles.itemList}>
        <Checkbox
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
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
      </div>
      <div className={styles.buttonGroup}>
        {!isEditing ? (
          <Button
            size="sm"
            variant="secondary"
            type="button"
            value="edit"
            onClick={() => setIsEditng(true)}
          >
            <FiEdit className="icon" />
            <span className="blind">수정</span>
          </Button>
        ) : (
          <Button
            size="sm"
            variant="secondary"
            type="button"
            value="save"
            onClick={() => {
              props.onUpdate(todo.id, editText);
              setIsEditng(false);
            }}
          >
            <FiCheck className="icon" />
            <span className="blind">수정 완료</span>
          </Button>
        )}

        {/* <Button onClick={() => setCompleted(!completed)}>
        <FiCheck />
        <span className="blind">완료</span>
      </Button> */}

        <Button
          size="sm"
          variant="secondary"
          type="button"
          value="delete"
          onClick={() => {
            props.onDelete(todo.id);
          }}
        >
          <FiTrash className="icon" />
          <span className="blind">삭제</span>
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;

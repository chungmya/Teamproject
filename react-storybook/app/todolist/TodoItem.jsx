
import { useState } from "react";
import styles from "./todolist.module.scss";


function TodoItem(props) {
	const [completed, setCompleted] = useState(false);
	const todo = props.todo;

	const [isEditing, setIsEditng] = useState(false);//수정 모드
	const [editText, setEditText] = useState(todo.title);	//새로 바뀔 텍스트



	return (
				<li className={styles.todoItem}>
 
					{isEditing ? (
						<input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
					) : (
						<span className={completed ? styles.completed : ""}>
						{todo.title}
						{todo.id}
						</span>
					)}

					{!isEditing ? (
						<button type="button" value="edit" onClick={() =>setIsEditng(true)}>수정</button>
					) : (
						<button type="button" value="save" onClick={() => {
							props.onUpdate(todo.id, editText);
							setIsEditng(false);
						}}>저장</button>
					)}

					<button onClick={() => setCompleted(!completed)}>완료</button>

					<button type="button" value="delete" 
					onClick={()=> {
						props.onDelete(todo.id); 
					}}

					>삭제</button>
				</li>
	)
}

export default TodoItem;
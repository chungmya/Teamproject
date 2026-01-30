
import { useState } from "react";
import styles from "./todolist.module.scss";


function TodoItem(todo) {
	const [completed, setCompleted] = useState(false);

	return (
		<div>
			<ul>
				<li className={styles.todoItem}>
					<input
					type="checkbox"
					checked={completed}
					onChange={() => setCompleted(!completed)}
					/>
					<span className={completed ? styles.completed : ""}>
					{todo.title}
					</span>
				</li>
			</ul>
		</div>
	)
}

export default TodoItem;
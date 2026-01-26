import { useState } from "react";
import styles from "./todolist.module.scss";


function TodoItem(props) {
	const [completed, setCompleted] = useState(false);

	return (
		<div>
			<ul>
				<li className="todo-item">
					<input
					type="checkbox"
					checked={completed}
					onChange={() => setCompleted(!completed)}
					/>
					<span className={completed ? styles.completed : ""}>
        할 일 하나
      </span>
				</li>
			</ul>
		</div>
	)
}

export default TodoItem;
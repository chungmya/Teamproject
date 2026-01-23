import { use } from "react";


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
					<span>{addItem}</span>
				</li>
			</ul>
		</div>
	)
}

export default TodoItem;
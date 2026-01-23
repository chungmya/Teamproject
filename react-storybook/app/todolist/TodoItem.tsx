import { use } from "react";

function TodoItem(props) {
	return (
		<div>
			<ul>
				<li>{props.item}</li>
			</ul>
		</div>
	)
}

export default TodoItem;
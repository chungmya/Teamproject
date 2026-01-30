import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./todolist.module.scss";



function TodoBoard(props) {
	return (
		<div className="todoboard">
			<ul>
				{props.todoList.map((todo) => (
					<TodoItem key={todo.id} title={todo.title}/>
				))}
			</ul>
		</div>
	);
};

export default TodoBoard;
import { use } from "react";
import TodoItem from "./TodoItem";
//import styles from "./todolist.module.scss";



function TodoBoard(props) {
	return (
		<div className="todoboard">
			<h1>Todo List</h1>
			{props.todoList.map((item)=><TodoItem item={item}/>)}
		</div>
	);
};

export default TodoBoard;
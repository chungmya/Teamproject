"use client";
import { useState } from "react";
import styles from "./todolist.module.scss";
import TodoBoard from "./TodoBoard";
import TodoItem from "./TodoItem";


function App() {
	const [inputValue, setInputValue] = useState('')
	const [todoList, setTodoList] = useState([
		{ id: 1, title:"밥먹기기", completed: false },
		{ id: 2, title:"독서하기기", completed: false },
	])

	const addItem=() => {
		setTodoList([...todoList, inputValue])
	}


  return (
    <main>
			<div className="container">
				<h1>TodoList chungmya</h1>
				<div className="todo-wrap">
				<div className="category">
					<p>목표 1</p>
				</div>
					<input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
					<button onClick={addItem}>Todo Add</button>
					<input type="button" value="update" />
					<TodoBoard todoList={todoList} />
				</div>
			</div>
		</main>
  );
}

export default App;
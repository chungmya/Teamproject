"use client";
import { useState } from "react";
import styles from "./todolist.module.scss";
import TodoBoard from "./TodoBoard";
import TodoItem from "./TodoItem";
import { title } from "process";


function App() {
	const [inputValue, setInputValue] = useState('')
	const [todoList, setTodoList] = useState([
		{ id: 1, title:"밥먹기기", completed: false },
		{ id: 2, title:"독서하기기", completed: false },
	])

	const [nextId, setNextId] = useState(3);
	
	const addItem=() => {
		const newTodo = {
			id : nextId,
			title: inputValue,
			completed: false,
		};

		setNextId(nextId + 1);
		setTodoList([...todoList, newTodo]);
		setInputValue("");
	};


		const updateTodo = (id, newTitle) => {
		const newList = todoList.map((todo) =>
			todo.id === id ? { ...todo, title: newTitle } : todo
		);

			setTodoList(newList);
		};

		const deleteTodo = (id) => {
			const deleList = todoList.filter((todo) => 
				todo.id !== id 
			);
			setTodoList(deleList);
		}



  return (
    <main>
			<div className="container">
				<h1>TodoList chungmya</h1>
				<div className="todo-wrap">
				<div className="category">
					<p>목표 1</p>
				</div>
					<input 
					value={inputValue} 
					type="text" 
					onChange={(event)=>setInputValue(event.target.value)}
					/>

					<button onClick={addItem}>Add Todo</button>
					<TodoBoard
						todoList={todoList}
						onUpdate={updateTodo}
						onDelete={deleteTodo}
					/>

				</div>
			</div>
		</main>
  );
}

export default App;
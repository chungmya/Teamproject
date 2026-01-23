"use client";
import { useState } from "react";
import styles from "./todolist.module.scss";
import TodoBoard from "./TodoBoard";


function App() {
	const [inputValue, setInputValue] = useState('')
	const [todoList, setTodoList] = useState([])


	const addItem=() => {
		//console.log("dfafd", inputValue)
		setTodoList([...todoList,inputValue])
	}


  return (
    <main>
			<div className="container">
				<input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
				<button onClick={addItem}>Todo Add</button>
				<TodoBoard todoList={todoList} />
			</div>
		</main>
  );
}

export default App;

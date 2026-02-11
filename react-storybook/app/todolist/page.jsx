"use client";
import { useState } from "react";
import styles from "./todolist.module.scss";
import TodoBoard from "./TodoBoard";
import TodoItem from "./TodoItem";
import { title } from "process";
import Timer from "../Timer/Timer";
import Login from "../Login/Login";

//컨포넌트
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, title: "밥먹기기", completed: false },
    { id: 2, title: "독서하기기", completed: false },
  ]);

  const [nextId, setNextId] = useState(3);

  const addItem = () => {
    const newTodo = {
      id: nextId,
      title: inputValue,
      completed: false,
    };

    setNextId(nextId + 1);
    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  const updateTodo = (id, newTitle) => {
    const newList = todoList.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo,
    );

    setTodoList(newList);
  };

  const deleteTodo = (id) => {
    const deleList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deleList);
  };

  //타이머
  const [showTimer, setShowTimer] = useState(false);

  // 다크 모드
  const [isDark, setIsDark] = useState(false);

  return (
    <main>
      <div className={styles.container} isDark={isDark} setIsDark={setIsDark}>
        <header>
          <h1>Chungmya's TodoList</h1>
        </header>
        <div className={styles.contents}>
          <div className={styles.contents}>
            <div className={styles.wrap}>
              <p className={styles.subtit}>🚩목표 1</p>
            </div>
            <div className={styles.inputRow}>
              <div className={styles.inputArea}>
                <Input
                  fullWidth
                  size="md"
                  value={inputValue}
                  type="text"
                  placeholder="할 일을 입력하세요"
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <Button onClick={addItem}>
                <span>add Todo</span>
              </Button>
            </div>

            <TodoBoard
              todoList={todoList}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>

        <div>
          {showTimer && <Timer />}
          <button type="text" onClick={() => setShowTimer(!showTimer)}>
            timer toggle
          </button>
        </div>

        <div>
          <Login />
        </div>
      </div>
    </main>
  );
}

export default App;

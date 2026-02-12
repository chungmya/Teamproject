"use client";
import { useState } from "react";
import styles from "./todolist.module.scss";
import TodoBoard from "./TodoBoard";
import TodoItem from "./TodoItem";
import { title } from "process";
import Timer from "../Timer/Timer";
import Login from "../Login/Login";

//레이아웃
import { ThemeContext } from "../Layout/Context/ThemeContext";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

//컨포넌트
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

function App() {
  const [inputValue, setInputValue] = useState("");

  //저장소..
  const [todoList, setTodoList] = useState([
    { id: 1, title: "밥먹기", completed: false },
    { id: 2, title: "독서하기", completed: false },
  ]);

  const [nextId, setNextId] = useState(3);

  //버튼 함수 호출
  const addItem = () => {
    const newTodo = {
      id: nextId,
      title: inputValue,
      completed: false,
    };

    setNextId(nextId + 1);
    setTodoList([...todoList, newTodo]); //기존 아이템은 유지하고, 새로운거를 넣어야함.
    setInputValue("");

    //console.log(todoList);
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

  //다크모드
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <main>
        <div
          className={styles.container}
          style={{
            backgroundColor: isDark ? "black" : "lightgray",
            color: isDark ? "white" : "black",
          }}
        >
          <Header />
          <div
            className={styles.contents}
            style={{
              backgroundColor: isDark ? "darkgray" : "white",
              color: isDark ? "white" : "black",
            }}
          >
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
                <Button size="md" onClick={addItem}>
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

          <div className={styles.loginArea}>
            {showTimer && <Timer />}
            <button type="text" onClick={() => setShowTimer(!showTimer)}>
              timer toggle
            </button>
            <div>
              <Login />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

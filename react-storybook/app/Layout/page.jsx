"use client";
import { useState } from "react";
import Layout from "./Layout";
import styles from "./layout.scss";
import { ThemeContext } from "./Context/ThemeContext"; //props를 사용하지 않고도 접근 가능하다.

function App() {
  const [isDark, setIsDark] = useState(false);
  //console.log("ThemeContext:", ThemeContext);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Layout />
    </ThemeContext.Provider>
  );
}

export default App;

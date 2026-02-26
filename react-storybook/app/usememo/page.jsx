"use client";
import { useCallback, useState } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트가 렌더링");

  // const name = useMemo(() => {
  //   return {
  //     lastName: "홍",
  //     firstName: "길동",
  //   };
  // }, []);

  const tellMe = useCallback(() => {
    console.log("하트 하트");
  }, []);

  return (
    <div
      style={{
        border: "2px solid navy",
        padding: "10px",
      }}
    >
      <h1>부모</h1>
      <p>age:{parentAge}</p>
      <button onClick={incrementParentAge}>부모의 나이 증가</button>
      <Child name={"홍길동동"} tellMe={tellMe} />
    </div>
  );
}

export default App;

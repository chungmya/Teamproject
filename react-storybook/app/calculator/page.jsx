"use client";
import { useState, useMemo, useEffect, useCallback, useReducer } from "react";
import Box from "./box";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 99; i++) {}
  return number + 99;
};

const EasyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

//여기에서만 수정 가능함
const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};
const reducer = (state, action) => {
  console.log("일하니?", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  const [number, setNumber] = useState(0);

  //const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const EasySum = EasyCalculate(easyNumber);

  const [isKorea, setIskorea] = useState(true);

  // const location = {
  //   contry: isKorea ? "한국" : "외국",
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // useEffect(() => {
  //   console.log("useEffect 호출");
  // }, [location]);

  const someFunction = useCallback(() => {
    console.log(`someFunc : number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  const [toggle, setToggle] = useState(true);

  //box
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);
  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // };
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  //useReducer
  //reducer state를 업데이트를 하는 역할할
  //dispatch - state 업데이트를 위한 reducer에 하는는 요구
  //action - 요구의 내용
  const [isMoney, setIsMoney] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>
        <h2>useReducer 은행에 오신것을 환영합니다.</h2>
        <p>잔고 : {money}원</p>
        <input
          type="number"
          value={isMoney}
          onChange={(e) => setIsMoney(parseInt(e.target.value))}
          step="1000" //천씩 감소
        />
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.deposit, payload: isMoney }); // payload는 action값
          }}
        >
          예금
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.withdraw, payload: isMoney }); // payload는 action값
          }}
        >
          출금
        </button>
      </div>

      <div>
        <div
          style={{
            background: isDark ? "black" : "white",
            width: "200px",
            height: "200px",
          }}
        />
        <input
          type="number"
          value={size}
          onChange={(e) => setSizes(e.target.value)}
        />
        <button type="button" onClick={() => setIsDark(!isDark)}>
          toggleTheme
        </button>
        <Box createBoxStyle={createBoxStyle} />
      </div>

      <div>
        <h3>useCallback</h3>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
        <br />
        <button onClick={someFunction}>Call someFunc</button>
      </div>

      <div>
        <h3>어려운 계산기</h3>
        <input
          type="number"
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <span>+ 99 = {hardSum}</span>

        <h3>쉬운 계산기</h3>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <span>+ 1 = {EasySum}</span>

        <h3>하루 몇끼 먹어요</h3>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <h3>어느 나라에 있었요?</h3>
        <span>나라 : {location.country}</span>
        <button onClick={() => setIskorea(!isKorea)}>비행기 타자자</button>
      </div>
    </div>
  );
}

export default App;

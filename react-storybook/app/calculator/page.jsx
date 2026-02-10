"use client";
import { useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 99; i++) {}
  return number + 99;
};

const EasyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  //const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const EasySum = EasyCalculate(easyNumber);

  const [number, setNumber] = useState(0);
  const [isKorea, setIskorea] = useState(true);

  // const location = {
  //   contry: isKorea ? "한국" : "외국",
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
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
  );
}

export default App;

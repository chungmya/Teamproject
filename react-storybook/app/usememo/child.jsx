"use client";
import React, { memo } from "react";

const Child = ({ name, tellMe }) => {
  console.log("자녀 컴포넌트가 렌더링");
  return (
    <div
      style={{
        border: "2px solid powderblue",
        padding: "10px",
      }}
    >
      <h3>자녀</h3>
      <p>name:{name}</p>
      <button onClick={tellMe}>say</button>
    </div>
  );
};

export default memo(Child);

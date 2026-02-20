"use client";
import { useState, useReducer } from "react";
import Student from "./Student";

const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: "James",
      isHere: "true",
    },
    {
      id: Date.now(),
      name: "sophie",
      isHere: "true",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStduent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStduent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (banana) => banana.id !== action.payload.id,
        ),
      };

    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };

    default:
      return state;
  }
};

function App() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        padding: "3rem 10rem",
      }}
    >
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((banana) => {
        return (
          <Student
            key={banana.id}
            name={banana.name}
            dispatch={dispatch}
            id={banana.id}
            isHere={banana.isHere}
          />
        );
      })}
    </div>
  );
}

export default App;

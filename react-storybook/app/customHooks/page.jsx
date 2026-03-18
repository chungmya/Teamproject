"use client";
// import { useInput } from "./useInput";
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

// function displayMessage(message) {
//   alert(message);
// }

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  // [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div>
      {/* useInput 
      <div>
        <h1>useInput</h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>확인</button>
      </div>
			*/}

      {/* useFetch */}
      <div>
        <h1>usefetch</h1>
        {/* <button onClick={() => fetchUrl("users")}>Users</button>
        <button onClick={() => fetchUrl("posts")}>Posts</button>
        <button onClick={() => fetchUrl("todos")}>Todos</button> */}
        <h2>User</h2>
        {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
        <h2>Post</h2>
        {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;

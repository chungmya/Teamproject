import { useState, useEffect, useRef } from "react";

function Login() {
	const inputRef = useRef();

   useEffect(()=> {
		inputRef.current.focus(); 
	 }, []);

	 const login = () => {
		alert(`${inputRef.current.value} 로그인 되었습니다.`)
		inputRef.current.focus(); // 다시 포커스 생김김
	 }


  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username"/>
			<button onClick={login}>로그인</button>
    </div>
  );
}

export default Login;

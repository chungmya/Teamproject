"use client";
import styles from "./Header.module.scss";

type HeaderProps = {
  title: string;
  onChangeMode: () => void;
};


function Header({title, onChangeMode}: HeaderProps) {
  return (
      <header>
        <h1>
					<a href="#" onClick={(event)=>{
					event.preventDefault();
					onChangeMode();
				}}
				>{title}</a>
				</h1>
      </header>
  )
}

export default Header;
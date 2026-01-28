"use client";

type HeaderProps = {
  title: string;
  onChangeMode: () => void;
};


export default function Header({title, onChangeMode} : HeaderProps) {
  return (
      <header >
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

// function Header(props: HeaderProps) {
//   const title = props.title;
//   const onChangeMode = props.onChangeMode;
// }


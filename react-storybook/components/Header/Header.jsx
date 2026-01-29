"use client";

export default function Header({title, onChangeMode}) {
  return (
      <header >
        <h1>
					<a href="#" onClick={(e)=>{
					e.preventDefault();
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


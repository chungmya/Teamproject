
type topic = {
	id:number;
	title: string;
	body: string,
}

function Nav(props: {topics:topic[]}) {
  return (
       <nav>
        <ol>
					{props.topics.map((topic)=> (
						<li key={topic.id}>
							<a href="#">{topic.title}</a>
						</li>
					))}
        </ol>
      </nav>
  )
}

export default Nav;
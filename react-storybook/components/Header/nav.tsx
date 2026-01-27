
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'scss', body:'scss is ...'},
    {id:3, title:'reat', body:'reat is ...'},
  ]
	
type Topic = {
	id:number;
	title: string;
	body: string,
}

type NavProps = {
	topics : Topic[],
	onChangeMode: (id: number) => void;
}

function Nav({topics, onChangeMode}: NavProps) {
  return (
       <nav>
        <ol>
					{topics.map((topic)=> (
						<li key={topic.id}>
							<a href={'/read/'+topic.id} onClick={(event)=>{
								event.preventDefault();
								onChangeMode(topic.id);
							}}
						>{topic.title}</a>
						</li>
					))}
        </ol>
      </nav>
  )
}

export default Nav;
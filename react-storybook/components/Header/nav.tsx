"use client";

type Topic = {
	id: number;
	title: string;
	body: string,
}


// type onSelect = {
// 	console.log('aaa');
// 	topics : Topic[],
// 	onChangeMode: (id: number) => void;
// }

export default function Nav({topics, onSelect}) {
  return (
       <nav>
        <ol>
					{topics.map((topic)=> (
						<li key={topic.id}>
							<a href={'/read/'+topic.id} onClick={(event)=>{
								event.preventDefault();
								onSelect(topic.id);
							}}
						>{topic.title}</a>
						</li>
					))}
        </ol>
      </nav>
  )
}


"use client";

type Topic = {
	id: number;
	title: string;
	body: string,
}

export default function Nav({topics, onSelect}) {
  return (
       <nav>
        <ol>
					{topics.map((topic)=> (
						<li key={topic.id}>
							<a href={'/read/'+topic.id} onClick={(event)=>{
								event.preventDefault();
								onSelect(topic);
							}}
						>{topic.title}</a>
						</li>
					))}
        </ol>
      </nav>
  )
}


"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Nav from "@/components/Header/Nav";
import Article from "@/components/Contents/Article";

export default function Home() {

  const [topics, setTopics] = useState<Topic[]>([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'scss', body:'scss is ...'},
    {id:3, title:'react', body:'reat is ...'},
  ]);

  const [nextId, setNextId] = useState(4);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(topics[0]);
  const [isCreate, setIsCreate] = useState(false);

  let content = null;
  let contextControl = null;

  if(isCreate){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);

      setSelectedTopic(newTopic);
      setNextId(nextId + 1);
      setIsCreate(false);
    }}/>;
  } else if (selectedTopic === null) {
    content = <Article title="welcome" body="Hello, WEB" />
  } else {
    content = (
      <Article 
        title={selectedTopic.title}
        body={selectedTopic.body}
       />
    );
    contextControl = <li><a href="/update/2">Update</a></li>
  }

  return (
    <div>
      <Header title="Chungmya" />

      <Nav 
        topics={topics} 
        onSelect = {(topic: Topic) => {
        setIsCreate(false);
        setSelectedTopic(topic);
      }}
      />

      {content}

      <ul>
        <li>
          <a href="/create/1" 
              onClick={(e)=> {
                e.preventDefault();
                setIsCreate(true);
              }}>
          Create</a>
        </li>
        {contextControl}
      </ul>

    </div>
  );
  

  function Create(props) {
    return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>

      </form>
    </article>
    )
  }
}

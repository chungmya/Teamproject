"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Nav from "@/components/Header/Nav";
import Article from "@/components/Contents/Article";

export default function Home() {
  const topics: Topic[] = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'scss', body:'scss is ...'},
    {id:3, title:'react', body:'reat is ...'},
  ]
  
  //<"WELCOME" | "READ">
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0]);
  let content = null;

  if(selectedTopic === null){
    content = <Article title="welcome" body="Hello, WEB"></Article>
  } else {
    content = (
    <Article 
      title={selectedTopic.title}
      body={selectedTopic.body}>
    </Article>
    )
  }

  //const [id, setId] = useState(null);

  return (
    <div>
      <Header title="Chungmya" onChangeMode={() =>{ setMode('WELCOME');}} />

      <Nav topics={topics} 
      onSelect = {(topic) => {
        setSelectedTopic(topic);
      }}
      />
      {content}
    </div>
  );
}

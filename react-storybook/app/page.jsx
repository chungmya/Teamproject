"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Nav from "@/components/Header/Nav";
import Article from "@/components/Contents/Article";

export default function Home() {

  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "scss", body: "scss is ..." },
    { id: 3, title: "react", body: "react is ..." },
  ]);

  const [nextId, setNextId] = useState(4);

  const [selectedTopic, setSelectedTopic] = useState(topics[0] ?? null);


  const [mode, setMode] = useState(selectedTopic ? "READ" : "WELCOME");

  let content = null;


  if (mode === "WELCOME" || selectedTopic === null) {
    content = <Article title="welcome" body="Hello, WEB" />;
  }

  if (mode === "READ" && selectedTopic) {
    content = <Article title={selectedTopic.title} body={selectedTopic.body} />;
  }

  if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title, body };

          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);

          setSelectedTopic(newTopic);
          setNextId(nextId + 1);
          setMode("READ");
        }}
      />
    );
  }

  if (mode === "UPDATE" && selectedTopic) {
    content = (
      <Update
        title={selectedTopic.title}
        body={selectedTopic.body}
        onUpdate={(title, body) => {

          const newTopics = topics.map((t) =>
            t.id === selectedTopic.id ? { ...t, title, body } : t
          );
          setTopics(newTopics);

          setSelectedTopic({ ...selectedTopic, title, body });
          setMode("READ");
        }}
      />
    );
  }

  return (
    <div>
      <Header
        title="Chungmya"
        onChangeMode={() => {
          setMode("WELCOME");
          setSelectedTopic(null);
        }}
      />

      <Nav
        topics={topics}
        onSelect={(topic) => {
          setSelectedTopic(topic);
          setMode("READ");
        }}
      />

      {content}

      <ul>
        {mode !== "CREATE" && (
          <li>
            <a
              href="/create"
              onClick={(e) => {
                e.preventDefault();
                setMode("CREATE");
              }}
            >
              Create
            </a>
          </li>
        )}

        {mode === "READ" && selectedTopic && (
          <>
          <li>
            <a
              href="/update"
              onClick={(e) => {
                e.preventDefault();
                setMode("UPDATE");
              }}
            >
              Update
            </a>
          </li>
          <li>
            <input type="button" value="Delete" 
            onClick={()=>{
              const newTopics = topics.filter(
                (topic) => topic.id !== selectedTopic.id
              );
              setTopics(newTopics);
              setSelectedTopic(null);
            }}
            />
          </li>
          </>
        )}
      </ul>
    </div>
  );
}

function Create({ onCreate }) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body" />
        </p>
        <p>
          <button type="submit">Create</button>
        </p>
      </form>
    </article>
  );
}


function Update({ title: initTitle, body: initBody, onUpdate }) {
  const [title, setTitle] = useState(initTitle);
  const [body, setBody] = useState(initBody);

  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUpdate(title, body);
        }}
      >
        <p>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </p>
        <p>
          <button type="submit">Update</button>
        </p>
      </form>
    </article>
  );
}

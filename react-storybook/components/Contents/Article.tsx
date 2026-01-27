"use client";

type ArtiProps = {
  title:string,
  body:string,
}

      export default function Article({title, body}: ArtiProps) {
        return(
          <article>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        )
      }

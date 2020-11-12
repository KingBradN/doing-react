import React from "react";
import "./style.css";

// Nested components, React Tools

// setup vars

const Author = 'Somashi Mbomvu';
const Title = 'Yizo lezo';
const sithombe = "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ;

export default function BookList() {
  return (
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return <article className="book">
    <img src={sithombe} alt="figures photo"/>
    <h1>{Title}</h1>
    <h4>{Author.toUpperCase()}</h4>
    {/*<p>{let x=6}</p>*/}
  </article>
}


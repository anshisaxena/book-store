import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Bookdescription from "./components/bookdescription";
import Home from "./components/home";
import "./App.css";
import { Link } from 'react-router-dom';
import Books from "./components/assets/books";
import BookCard from "./components/BookCard";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Footer from "./components/footer";
const Bookscard= () => {
    const bookCardRef = useRef(null);

  const scrollToBookCards = () => {
    bookCardRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header scrollToBookCards={scrollToBookCards} />
      <Home scrollToBookCards={scrollToBookCards} />
      <div ref={bookCardRef} className="book-container">
        {Books.map((item, index) => (
          <BookCard
            key={index}
            id={index}
            img={item.imageSource}
            title={item.bookName}
            author={item.author}
            description={item.Bookdescription}
            price={item.price}
            genre={item.bookGenre}
            pages={item.pages}
          />
        ))}
      </div>
      
      {Books.map((item, index) => (
        <Bookdescription
          key={index}
          id={index}
          img={item.imageSource}
          title={item.bookName}
          author={item.author}
          description={item.Bookdescription}
          price={item.price}
          genre={item.bookGenre}
          pages={item.pages}
        />
      ))}
      <Footer />
    </div>
  )
}

export default Bookscard;

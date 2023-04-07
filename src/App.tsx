import './App.css';
import { Center, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getAll } from './assets/BooksAPI';
import {
  findCurrentlyReading,
  findNone,
  findRead,
  findWantToRead,
} from './assets/functions';
import reactLogo from './assets/react.svg';
import { Book } from './assets/types';
import BookCard from './Components/BookCard';
import CardsGrid from './Components/CardsGrid';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState<Book[] | null>(null);
  const [currentlyReading, setcurrentlyReading] = useState<Book[] | null>(null);
  const [wantToRead, setwantToRead] = useState<Book[] | null>(null);
  const [read, setRead] = useState<Book[] | null>(null);
  // const [none, setNone] = useState<Book[] | null>(null);

  useEffect(() => {
    getAll()
      .then((data) => {
        setAllBooks(data);
        setcurrentlyReading(findCurrentlyReading(data));
        setwantToRead(findWantToRead(data));
        setRead(findRead(data));
        // setNone(findNone(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <Center my={5}>
                  <Heading>Currently Reading</Heading>
                </Center>
                {!currentlyReading ? (
                  <Center>Loading ...</Center>
                ) : currentlyReading?.length ? (
                  <CardsGrid books={currentlyReading} />
                ) : (
                  'No books in this Shelf'
                )}
              </div>
              <div className="bookshelf">
                <Center my={5}>
                  <Heading>Want to Read</Heading>
                </Center>
                {!wantToRead ? (
                  <Center>Loading ...</Center>
                ) : wantToRead?.length ? (
                  <CardsGrid books={wantToRead} />
                ) : (
                  'No books in this Shelf'
                )}
              </div>
              <div className="bookshelf">
                <Center my={5}>
                  <Heading>Read</Heading>
                </Center>
                {!read ? (
                  <Center>Loading ...</Center>
                ) : read?.length ? (
                  <CardsGrid books={read} />
                ) : (
                  'No books in this Shelf'
                )}
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

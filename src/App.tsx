import './App.css';
import { Center, Heading } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
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
import ContinueReading from './Components/ContinueReading';
import Read from './Components/Read';
import WantToRead from './Components/WantToRead';

interface ContextState {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  currentlyReading: Book[] | null;
  wantToRead: Book[] | null;
  read: Book[] | null;
}

export const contextApi = createContext<ContextState>({
  change: false,
  setChange: () => {},
  currentlyReading: null,
  wantToRead: null,
  read: null,
});

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState<Book[] | null>(null);
  const [currentlyReading, setcurrentlyReading] = useState<Book[] | null>(null);
  const [wantToRead, setwantToRead] = useState<Book[] | null>(null);
  const [read, setRead] = useState<Book[] | null>(null);
  const [change, setChange] = useState(Boolean(0));
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
  }, [change]);

  return (
    <contextApi.Provider
      value={{ change, setChange, currentlyReading, wantToRead, read }}
    >
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
          <div>
            <Center bgColor={'green'}>
              <h1>MyReads</h1>
            </Center>
            <div>
              <div>
                <ContinueReading />
                <WantToRead />
                <Read />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => setShowSearchpage(!showSearchPage)}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    </contextApi.Provider>
  );
}

export default App;

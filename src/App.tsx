/**
 * Import all the dependencies and loads
 */
import './App.css';
import { Center, Heading } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from './assets/BooksAPI';
import {
  findCurrentlyReading,
  findRead,
  findWantToRead,
} from './assets/functions';
import { Book } from './assets/types';
import ContinueReading from './Components/ContinueReading';
import Read from './Components/Read';
import WantToRead from './Components/WantToRead';

/**
 * Interface of context state
 */

interface ContextState {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  currentlyReading: Book[] | null;
  wantToRead: Book[] | null;
  read: Book[] | null;
  allBooks: Book[] | null;
}

/**
 * Intialize the context api and export it so that it can accessible in different pages
 */

export const contextApi = createContext<ContextState>({
  change: false,
  setChange: () => {},
  currentlyReading: null,
  wantToRead: null,
  read: null,
  allBooks: null,
});

function App() {
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
      })
      .catch((err) => console.log(err));
  }, [change]);

  /**
   * Render different shelf to the mainpage. Alos there is a plus icon to route to search page and search for books to add to the different page
   */

  return (
    <contextApi.Provider
      value={{
        change,
        setChange,
        currentlyReading,
        wantToRead,
        read,
        allBooks,
      }}
    >
      <div className="app">
        <div>
          <Center
            bgColor={'gray'}
            h="150px"
            bgGradient="linear(to-r, green.200, pink.500)"
          >
            <Heading size="3xl">My Reads</Heading>
          </Center>
          <div>
            <div>
              <ContinueReading />
              <WantToRead />
              <Read />
            </div>
          </div>
          <div className="open-search">
            <Link to={'/search'}> </Link>
          </div>
        </div>
      </div>
    </contextApi.Provider>
  );
}

export default App;

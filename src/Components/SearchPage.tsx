/**
 * This is the search page. User can query for the books.
 * If the query is successful then the books will apear.
 * If there is no book then it shows no book message.
 * If the user only press enter without giving any query then it message to put query in the search box
 */

import { ArrowLeftIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../assets/BooksAPI';
import { Book } from '../assets/types';
import CardsGrid from './CardsGrid';

type AppProps = {
  showSearchPage: boolean;
  setShowSearchpage: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState<Book[]>([]);
  const [response, setResponse] = useState<string>(
    'Please provide a query in the search bar',
  );

  const searchHandler = async () => {
    search(query, 10)
      .then((data) => {
        !data.error && !data.books.error && setSearchedBooks(data.books);
        !data.error && data.books.error && setSearchedBooks([]);
        !data.error &&
          data.books.error &&
          setResponse('No book found as per your search');

        data.error && setSearchedBooks([]);
        data.error && setResponse('Please provide a query in the search bar');
      })
      .catch((err) => err);
  };

  return (
    <div className="search-books">
      <Box className="search-books-bar" alignItems={'center'}>
        <InputGroup>
          <InputLeftElement
            children={
              <Link to={'/'}>
                {' '}
                <IconButton
                  colorScheme="blue"
                  borderRadius={0}
                  aria-label="Search database"
                  icon={<ArrowLeftIcon mx={3} />}
                />
              </Link>
            }
          />
          <Input
            mx={10}
            borderRadius={0}
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchHandler();
              }
            }}
          />
          <InputRightElement
            children={
              <IconButton
                onClick={searchHandler}
                colorScheme="blue"
                borderRadius={0}
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            }
          />
        </InputGroup>
        {/* <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchHandler();
              }
            }}
          /> */}
      </Box>
      <div className="search-books-results">
        {searchedBooks.length > 0 ? (
          <CardsGrid books={searchedBooks} />
        ) : (
          <Center> {response} </Center>
        )}
      </div>
    </div>
  );
}

import { ArrowLeftIcon } from '@chakra-ui/icons';
import { Box, Center, useStatStyles } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contextApi } from '../App';
import { search } from '../assets/BooksAPI';
import { Book } from '../assets/types';
import CardsGrid from './CardsGrid';

type AppProps = {
  showSearchPage: boolean;
  setShowSearchpage: React.Dispatch<React.SetStateAction<boolean>>;
};

function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchedBooks, setSearchedBooks] = useState<Book[]>([]);
  const [response, setResponse] = useState<string>(
    'Please provide a query in the search bar',
  );

  const searchHandler = async () => {
    // setSearchedBooks([]);
    search(query, 1)
      .then((data) => {
        console.log(data);
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
        <Link to={'/'}>
          {' '}
          <ArrowLeftIcon mx={3} />{' '}
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchHandler();
              }
            }}
          />
        </div>
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

export default SearchPage;

import { ArrowLeftIcon } from '@chakra-ui/icons';
import { useStatStyles } from '@chakra-ui/react';
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

  const searchHandler = async () => {
    search(query, 20)
      .then((data) => setSearchedBooks(data))
      .catch((err) => err);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={'/'}>
          {' '}
          <ArrowLeftIcon />{' '}
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
      </div>
      <div className="search-books-results">
        {searchedBooks.length ? <CardsGrid books={searchedBooks} /> : ' '}
      </div>
    </div>
  );
}

export default SearchPage;

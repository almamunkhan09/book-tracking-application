import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Book } from '../assets/types';
import BookCard from './BookCard';

type AppProps = {
  books: Book[];
};

function CardsGrid({ books }: AppProps) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }} spacing={4}>
      {books.map((book) => {
        return (
          <GridItem key={`key-${book.id}`} p={2}>
            <BookCard book={book} />
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
}

export default CardsGrid;

import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { Book } from '../assets/types';
import BookCard from './BookCard';

type AppProps = {
  books: Book[];
};

export default function CardsGrid({ books }: AppProps) {
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

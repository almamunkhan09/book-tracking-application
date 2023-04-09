/**
 * This page the the last child in the components.
 * It shows the book picture,authors and title
 * It also has action button to select the shelf.
 * On each selection the book will move to respective shelf.
 */

import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Select,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { contextApi } from '../App';
import { update } from '../assets/BooksAPI';
import { Book } from '../assets/types';
import { TransitionOnShelfChange } from './TransitionOnShelfChange';

/**
 * The type declaration for the props
 */
type AppProps = {
  book: Book;
};

export default function BookCard({ book }: AppProps) {
  // console.log('book', book);
  const { change, setChange, allBooks } = useContext(contextApi);
  const [transitionOpen, setTransitionOpen] = useState<boolean>(false);

  /**
   * Is Exist is taken as consideration for search page
   * If the book is alreday in any shelf the option in select will reflect
   */

  const isExist: Book[] | undefined = allBooks?.filter(
    (item) => item.id === book.id,
  );
  if (isExist && isExist?.length > 0) {
    book = { ...isExist[0] };
  }

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (event.target.value) {
      if (event.target.value !== book.shelf) {
        setTransitionOpen(true);
        await update(book, event.target.value);
        setChange(!change);
        setTimeout(() => setTransitionOpen(false), 1000);
      }
    }
  };
  if (!book) return <div> No book </div>;
  return (
    <>
      <Card
        direction={'row'}
        overflow="hidden"
        variant="outline"
        alignItems={'center'}
        h={'210px'}
      >
        <Image
          objectFit="cover"
          mx={1}
          w={128}
          h={193}
          borderRadius={5}
          alt="Caffe Latte"
          src={book.imageLinks.thumbnail}
        />

        <Stack>
          <CardBody>
            <Heading size="md" noOfLines={2}>
              {book.title}
            </Heading>{' '}
            {book.authors && book.authors.length > 0 && (
              <Heading size="xs" py={2} noOfLines={2}>
                {book.authors.length > 1
                  ? book.authors.join(',')
                  : book.authors[0]}
              </Heading>
            )}
          </CardBody>

          <CardFooter>
            <Flex>
              <Spacer />
              <Select
                mr={1}
                placeholder="Move to ..."
                onChange={handleSelectChange}
              >
                <option
                  value="currentlyReading"
                  disabled={book.shelf === 'currentlyReading'}
                >
                  Currently Reading
                </option>
                <option
                  value="wantToRead"
                  disabled={book.shelf === 'wantToRead'}
                >
                  Want to Read
                </option>
                <option value="read" disabled={book.shelf === 'read'}>
                  Read
                </option>
                <option value="none" disabled={book.shelf === 'none'}>
                  None
                </option>
              </Select>
            </Flex>
          </CardFooter>
        </Stack>
      </Card>
      <TransitionOnShelfChange open={transitionOpen} />
    </>
  );
}

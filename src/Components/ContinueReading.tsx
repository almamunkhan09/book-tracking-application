/**
 * This page renders all the books which are currently ath shelf of currently reading books
 */

import { Center, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { contextApi } from '../App';
import CardsGrid from './CardsGrid';

export default function ContinueReading() {
  const { currentlyReading } = useContext(contextApi);
  return (
    <div className="bookshelf">
      <Center my={5}>
        <Heading>Currently Reading</Heading>
      </Center>
      {!currentlyReading ? (
        <Center>Loading ...</Center>
      ) : currentlyReading?.length ? (
        <CardsGrid books={currentlyReading} />
      ) : (
        <Center> No Book in this shelf </Center>
      )}
    </div>
  );
}

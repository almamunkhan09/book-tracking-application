/**
 * This page renders all the books which are currently ath shelf named read
 */

import { Center, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { contextApi } from '../App';
import CardsGrid from './CardsGrid';

export default function Read() {
  const { read } = useContext(contextApi);
  return (
    <div className="bookshelf">
      <Center my={5}>
        <Heading>Read</Heading>
      </Center>
      {!read ? (
        <Center>Loading ...</Center>
      ) : read?.length ? (
        <CardsGrid books={read} />
      ) : (
        <Center> No Book in this shelf </Center>
      )}
    </div>
  );
}

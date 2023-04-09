/**
 * This page renders all the books which are currently ath shelf named 'want to reaed'
 */

import { Center, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { contextApi } from '../App';
import CardsGrid from './CardsGrid';

export default function WantToRead() {
  const { wantToRead } = useContext(contextApi);
  return (
    <div className="bookshelf">
      <Center my={5}>
        <Heading>Want to Read</Heading>
      </Center>
      {!wantToRead ? (
        <Center>Loading ...</Center>
      ) : wantToRead?.length ? (
        <CardsGrid books={wantToRead} />
      ) : (
        <Center> No Book in this shelf </Center>
      )}
    </div>
  );
}

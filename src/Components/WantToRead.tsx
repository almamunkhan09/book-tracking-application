import { Center, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { contextApi } from '../App';
import CardsGrid from './CardsGrid';

function WantToRead() {
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

export default WantToRead;

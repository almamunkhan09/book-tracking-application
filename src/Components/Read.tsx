import { Center, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { contextApi } from '../App';
import CardsGrid from './CardsGrid';

function Read() {
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

export default Read;

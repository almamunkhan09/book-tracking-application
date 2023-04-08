import { Center, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { contextApi } from '../App';
import { Book } from '../assets/types';
import CardsGrid from './CardsGrid';

function ContinueReading() {
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

export default ContinueReading;

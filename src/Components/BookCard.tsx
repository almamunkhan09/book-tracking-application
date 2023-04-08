import {
  AspectRatio,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { contextApi } from '../App';
import { update } from '../assets/BooksAPI';
import { Book } from '../assets/types';

type AppProps = {
  book: Book;
};

function BookCard({ book }: AppProps) {
  const { change, setChange } = useContext(contextApi);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (event.target.value) {
      setSelectedValue(event.target.value);
      if (event.target.value !== book.shelf) {
        await update(book, event.target.value);
        setChange(!change);
      }
    }
  };
  return (
    <Card
      direction={'row'}
      overflow="hidden"
      variant="outline"
      alignItems={'center'}
      h={'210px'}
    >
      <Image
        objectFit="cover"
        // my={'auto'}
        mx={1}
        // pl={2}
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
          {/* Book ttle */}
          <Heading size="xs" py={2} noOfLines={2}>
            {book.authors.join(',')}
          </Heading>{' '}
          <Text py="2"> </Text>
        </CardBody>

        <CardFooter>
          <Flex>
            <Spacer />
            <Select
              mr={1}
              placeholder="Move to ..."
              onChange={handleSelectChange}
              // value={book.shelf}
            >
              <option
                value="currentlyReading"
                disabled={book.shelf === 'currentlyReading'}
              >
                Currently Reading
              </option>
              <option value="wantToRead" disabled={book.shelf === 'wantToRead'}>
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
  );
}

export default BookCard;

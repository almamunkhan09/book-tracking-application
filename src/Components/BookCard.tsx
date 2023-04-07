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
import React from 'react';
import { Book } from '../assets/types';

type AppProps = {
  book: Book;
};

function BookCard({ book }: AppProps) {
  return (
    <Card
      direction={'row'}
      overflow="hidden"
      variant="outline"
      alignItems={'center'}
    >
      <Image
        objectFit="cover"
        my={{ md: 'auto' }}
        pl={2}
        w={128}
        h={193}
        borderRadius={5}
        alt="Caffe Latte"
        src={book.imageLinks.thumbnail}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{book.title}</Heading> {/* Book ttle */}
          <Heading size="xs" py={2} noOfLines={1}>
            {book.authors.join(',')}
          </Heading>{' '}
          <Text py="2"> </Text>
        </CardBody>

        <CardFooter>
          <Flex>
            <Spacer />
            <Select mr={1} placeholder="Move to ...">
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </Select>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default BookCard;

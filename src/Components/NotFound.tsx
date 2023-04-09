import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container maxW="2xl" h={'100vh'} centerContent>
      <Center
        padding="4"
        color="black"
        // justifyContent={'center'}
        // alignItems={'center'}
        // h={'100vh'}
        m={'auto'}
      >
        <VStack>
          <Heading> The page is not found</Heading>

          <Button>
            {' '}
            <Link to={'/'}> Home</Link>
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}

export default NotFound;

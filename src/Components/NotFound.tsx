/**
 * This page will render if the routes does not exist. It also has button to route to the home page
 */

import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
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

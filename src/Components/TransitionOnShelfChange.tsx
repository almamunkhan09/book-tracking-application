import {
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';

export function TransitionOnShelfChange({ open }: { open: boolean }) {
  const { isOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isCentered isOpen={open} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          h={'400px'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            justifyContent={'center'}
          />
        </ModalContent>
      </Modal>
    </>
  );
}

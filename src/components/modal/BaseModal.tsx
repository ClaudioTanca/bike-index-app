import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ModalState } from '../../features/modal/modal.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeModal } from '../../features/modal/modal.slice';
import { isObject } from "lodash";

const BaseModal = () => {
  const { isOpen, isError, title, text, data, /* confirm, confirmText */ }: ModalState = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(closeModal());

  return (
    <Modal colorScheme={ isError ? 'red' : 'teal' } isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ title ? title : 'Modal Title'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {text && <Text>{text}</Text>}
          {isObject(data) &&
            <UnorderedList listStyleType="none">
              {
                Object.entries(data).map(([k, v]) => (
                  <ListItem key={k}>
                    <Text display="inline-block" fontWeight="bold">{k}:</Text> <Text display="inline-block">{v}</Text>
                  </ListItem>
                ))
              }
            </UnorderedList>
          }
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
{/*           {confirm &&
            <Button onClick={confirm} variant="ghost">{confirmText ? confirmText : 'Confirm'}</Button>
          } */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};

export default BaseModal;
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
  Flex,
  Image,
} from "@chakra-ui/react";
import { ModalState } from '../../features/modal/modal.slice';
import { Bike } from "../../models";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeModal } from '../../features/modal/modal.slice';
import { isBoolean, isObject, isString } from "lodash";
import { formatDate } from "../../utils/functions";
import { Loader } from "../utility/Loader";

const BaseModal = () => {
  const { isOpen, isError, title, text, bike, /* confirm, confirmText */ }: ModalState = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(closeModal());
  const isDateNum = (str: string): boolean => /^date_/.test(str);
  const isImageUrl = (str: string): boolean => /[^/]+(jpg|jpeg|png)$/.test(str);

  return (
    <Modal 
      colorScheme={ isError ? 'red' : 'teal' } 
      isOpen={isOpen} 
      onClose={onClose} 
      scrollBehavior="inside" 
      size="5xl"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ title ? title : 'Modal Title'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody bgColor="teal.50" pt="2" pb="4">
          {text && <Text>{text}</Text>}
            {isObject(bike) &&
              <Flex flexDirection="column" justifyContent="center" alignItems="center">
                {bike.hasOwnProperty('large_img') && 
                  <Image 
                    src={bike.large_img} 
                    // fallBackSrc={bike.thumb}
                    fallback={<Loader/>}
                    w="container.xs"
                    objectFit="cover" 
                    rounded="md"
                    mt="2"
                    mb="4"
                    h="full"
                    maxWidth="72"
                  /> 
                }
                <Flex flexDirection="row" justifyContent="center" alignItems="center" flexWrap="wrap">
                  {
                    Object.entries(bike).map(([k, v]) => (
                      (v && !isImageUrl(v)) && 
                      <Text key={k} py="1" px="2" rounded="md">
                        <Text 
                          display="inline-block" 
                          fontWeight="bold" 
                          textTransform="capitalize"
                          color="teal.700"
                        >
                            {k.replaceAll('_', ' ')}:
                        </Text>
                        <span>{' '}</span> 
                        <Text 
                          wordBreak="break-all" 
                          display="inline-block"
                        >
                          {
                            isBoolean(v) 
                              ? v.toString() 
                              : isDateNum(k)
                                ? formatDate(v)
                                : v
                          }
                        </Text>
                      </Text>
                    ))
                  }
                </Flex>
              </Flex>
            }
        </ModalBody>
        <ModalFooter w="full" display="flex" justifyContent={["center", "flex-end"]} alignItems="center" flexDirection={["column", "row"]}>
          <Button w={["full", "fit-content"]} variant="outline" mb={[3, 0]}  mr={[0, 3]} onClick={onClose}>
            Close
          </Button>
          <Button w={["full", "fit-content"]} colorScheme="teal">Confirm</Button>
{/*           {confirm &&
            <Button onClick={confirm} w={["full", "fit-content"]} colorScheme="teal">{confirmText ? confirmText : 'Confirm'}</Button>
          } */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};

export default BaseModal;
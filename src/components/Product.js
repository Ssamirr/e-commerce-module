import React, { useContext } from 'react'
import { Box, Flex, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import closeIcon from '../images/icon-close.svg'
import { mainContext } from '../context/ProductContext';
import ThumbNailImg from './ThumbNailImg';
import ArrowIcons from './ArrowIcons';



function Product() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  let { productImg, setProductImg, SlideData, isLargerThan992, isSmallerThan576 } = useContext(mainContext);

  return (
    <>
      <Box pos="relative">
        <Image
          transition="0.3s ease all"
          onClick={onOpen}
          borderRadius={isSmallerThan576 ? "0px" : "10px"}
          src={productImg}
        />

        {!isLargerThan992 &&
          <ArrowIcons />
        }

        <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent pos="relative" bg="transparent" border="none" boxShadow="none">

            <Image
              pos="absolute"
              right="26px"
              top="-20px"
              w="20px"
              src={closeIcon}
              cursor="pointer"
              _hover={{ opacity: "0.6" }}
              transition="0.3s ease all"
              onClick={onClose}
            />

            <ModalBody pos="relative">
              <Image borderRadius="10px" src={productImg} />
              <ArrowIcons />

            </ModalBody>
            <ModalFooter>
              <Flex w="100%" px="30px" justify="space-between" mt="30px">
                {React.Children.toArray(
                  SlideData.map(item => (
                    <Image
                      border={item === productImg ? "2px solid orange" : "2px solid white"}
                      opacity={item === productImg && "0.6"}
                      onClick={() => setProductImg(SlideData.find(q => q === item))}
                      _hover={{ border: "2px solid orange", opacity: "0.6" }}
                      transition="0.3s ease all"
                      cursor="pointer"
                      borderRadius="10px"
                      w="calc(100%/5)"
                      src={item}
                    />
                  )))
                }
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>


        {isLargerThan992 &&
          <ThumbNailImg />
        }
      </Box>
    </>
  )
}

export default Product
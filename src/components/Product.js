import React, { useContext } from 'react'
import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'
import ImageSlider from "./ImageSlider";
import { mainContext } from '../context/ProductContext';


function Product() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  let { productImg, setProductImg } = useContext(mainContext);

  const SlideData = [image1, image2, image3, image4]

  return (
    <>
      <Box>
        {/* <ImageSlider slides={SlideData} /> */}
        <Image onClick={onOpen} borderRadius="10px" src={productImg} />


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="transparent">
            <ModalBody >
              <Image borderRadius="10px" src={productImg} />
              <Flex justify="space-between" mt="30px">
                {
                  SlideData.map(item => (
                    <Image onClick={() => setProductImg(item)} _hover={{ border: "2px solid orange", opacity: "0.6" }} transition="0.3s ease all" border="2px solid white" cursor="pointer" borderRadius="10px" w="80px" src={item} />
                  ))
                }
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>


        <Flex justify="space-between" mt="30px">
          {
            SlideData.map(item => (
              <Image onClick={() => setProductImg(item)} _hover={{ border: "2px solid orange", opacity: "0.6" }} transition="0.3s ease all" border="2px solid white" cursor="pointer" borderRadius="10px" w="100px" src={item} />
            ))
          }
        </Flex>
      </Box>
    </>
  )
}

export default Product
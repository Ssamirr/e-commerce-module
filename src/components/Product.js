import React, { useContext } from 'react'
import { Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'
import ImageSlider from "./ImageSlider";
import { mainContext } from '../context/ProductContext';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';


function Product() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  let { productImg, setProductImg } = useContext(mainContext);

  const SlideData = [image1, image2, image3, image4]

  const arrowBackImg = () => {
    let currentIndex = SlideData.indexOf(productImg);
    let previousImg
    if (currentIndex === 0) {
      previousImg = SlideData[SlideData.length - 1];
    } else {
      previousImg = SlideData[currentIndex - 1];

    }
    setProductImg(previousImg)
  }

  const arrowForwardImg = () => {
    let currentIndex = SlideData.indexOf(productImg);
    let nextImg
    if (currentIndex === SlideData.length - 1) {
      nextImg = SlideData[0];
    } else {
      nextImg = SlideData[currentIndex + 1];

    }
    setProductImg(nextImg)
  }

  return (
    <>
      <Box>
        {/* <ImageSlider slides={SlideData} /> */}
        <Image onClick={onOpen} borderRadius="10px" src={productImg} />


        <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="transparent" border="none" boxShadow="none">
            <ModalBody pos="relative">
              <Image borderRadius="10px" src={productImg} />

              <ArrowBackIcon onClick={arrowBackImg} _hover={{ color: "orange" }} cursor="pointer" transition="0.3s ease all" bg="white" w="42px" borderRadius="50%" h="42px" pos="absolute" left="0" top="50%" transform="translate(0%,-50%)" />
              <ArrowForwardIcon onClick={arrowForwardImg} _hover={{ color: "orange" }} cursor="pointer" transition="0.3s ease all" bg="white" w="42px" borderRadius="50%" h="42px" pos="absolute" right="0" top="50%" transform="translate(0%,-50%)" />
            </ModalBody>
            <ModalFooter>
              <Flex w="100%" px="30px" justify="space-between" mt="30px">
                {
                  SlideData.map(item => (
                    item===productImg ? 
                    <Image border="2px solid orange" opacity="0.6" onClick={() => setProductImg(SlideData.find(q => q === item))} _hover={{ border: "2px solid orange", opacity: "0.6" }} transition="0.3s ease all"  cursor="pointer" borderRadius="10px" w="80px" src={item} />
                    :
                    <Image onClick={() => setProductImg(SlideData.find(q => q === item))} _hover={{ border: "2px solid orange", opacity: "0.6" }} transition="0.3s ease all" border="2px solid white" cursor="pointer" borderRadius="10px" w="80px" src={item} />
                  ))
                }
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>


        <Flex justify="space-between" mt="30px">
          {
            SlideData.map(item => (
              item===productImg ? 
              <Image border="2px solid orange" opacity="0.6" onClick={() => setProductImg(SlideData.find(q => q === item))} _hover={{ border: "2px solid orange", opacity: "0.6" }} transition="0.3s ease all" cursor="pointer" borderRadius="10px" w="100px" src={item} />
              :
              <Image onClick={() => setProductImg(SlideData.find(q => q === item))} _active={{ border: "2px solid orange", opacity: "0.6" }} _hover={{ border: "2px solid orange", opacity: "0.6" }} transition="0.3s ease all" border="2px solid white" cursor="pointer" borderRadius="10px" w="100px" src={item} />
            ))
          }
        </Flex>
      </Box>
    </>
  )
}

export default Product
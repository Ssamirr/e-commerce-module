import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Heading, Text, Image, useToast} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { mainContext } from '../context/ProductContext'
import cart from '../images/icon-cart2.svg'



function ProductDetail() {

  const toast = useToast()

  let { count, setCount, products, setProducts,ToastProduct } = useContext(mainContext);

  const decreaseCount = () => {
    setCount(() => {
      if (count === 0) {
        return 0;
      } else {
        return count - 1;
      }
    })
  }

  const increaseCount = () => {
    setCount(count + 1);
  }

  const addCart = () => {
    if (count === 0) {
      ToastProduct('Product not added',"Select the quantity",'error')
    } else {
      ToastProduct('Product added',"Thank you for choosing us",'success')
      setProducts(products+count);
      setCount(0);
    }
  }

  return (
    <Box px="40px" py="50px">
      <Flex direction="column">
        <Heading color="orange" textTransform="uppercase" as='h3' size='sm' mb="10px">Sneaker Company</Heading>
        <Heading mb="25px" as="h1">Fall Limited Edition Sneakers</Heading>
        <Text mb="10px" fontWeight="bold" opacity="0.6">These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.</Text>
        <Flex align="center">
          <Text fontWeight="bold" fontSize="1.75rem" mr="15px">$125.00</Text>
          <Text fontWeight="700" background="hsl(25, 100%, 94%)" px="3px" borderRadius="5px" color="orange">50%</Text>
        </Flex>
        <Text mb="25px" as='del' fontWeight="bold" opacity="0.6">$250.00</Text>
        <Flex justify="space-between">
          <Button p="0" _hover={{ background: "#edf2f7" }} gap={12} w="30%">
            <Flex w="100%" align="center">
              <Text onClick={decreaseCount} w="calc(100%/3)" fontWeight="bold" color="orange"><MinusIcon /></Text>
              <Text w="calc(100%/3)" fontWeight="bold">{count}</Text>
              <Text onClick={increaseCount} w="calc(100%/3)" fontWeight="bold" color="orange"><AddIcon /></Text>
            </Flex>
          </Button>
          <Button onClick={addCart} _hover={{ background: "orange", opacity: "0.7" }} w="65%" color="white" background="orange">
            <Image mr="20px" src={cart} />
            <Text>Add to cart</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductDetail
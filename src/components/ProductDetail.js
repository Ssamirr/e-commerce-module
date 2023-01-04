import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { mainContext } from '../context/ProductContext'
import cart from '../images/icon-cart2.svg'



function ProductDetail() {

  let { count, setCount, products, setProducts, ToastProduct, isLargerThan1200, isSmallerThan576 } = useContext(mainContext);

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
      ToastProduct('Product not added', "Select the quantity", 'error')
    } else {
      ToastProduct('Product added', "Thank you for choosing us", 'success')
      setProducts(products + count);
      setCount(0);
    }
  }

  return (
    <Box
      px={isLargerThan1200 ? "40px" : isSmallerThan576 ? "20px" : "0px"}
      py={isLargerThan1200 ? "50px" : isSmallerThan576 ? "30px" : "10px"}
    >
      <Flex direction="column">

        <Heading color="orange" textTransform="uppercase" as='h3' size='sm' mb="10px">Sneaker Company</Heading>
        <Heading mb="25px" as="h1">Fall Limited Edition Sneakers</Heading>

        <Text
          mb="10px"
          fontWeight="700"
          opacity="0.6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Text>

        <Flex align="center">
          <Text fontWeight="700" fontSize="1.75rem" mr="15px">$125.00</Text>
          <Text fontWeight="700" background="hsl(25, 100%, 94%)" px="3px" borderRadius="5px" color="orange">50%</Text>
        </Flex>

        <Text textAlign={isSmallerThan576 && "end"} mb="25px" as='del' fontWeight="700" opacity="0.6">$250.00</Text>
        <Flex wrap={isSmallerThan576 && "wrap"} justify="space-between">
          <Button
            mb={isSmallerThan576 && "10px"}
            p="0"
            _hover={{ background: "#edf2f7" }}
            gap={12}
            w={isSmallerThan576 ? "100%" : "30%"}
          >
            <Flex w="100%" align="center">
              <Text
                onClick={decreaseCount}
                w="calc(100%/3)"
                fontWeight="700"
                color="orange">
                <MinusIcon />
              </Text>

              <Text w="calc(100%/3)" fontWeight="700">{count}</Text>

              <Text
                onClick={increaseCount}
                w="calc(100%/3)"
                fontWeight="700"
                color="orange">
                <AddIcon />
              </Text>
            </Flex>
          </Button>
          
          <Button
            onClick={addCart}
            _hover={{ background: "orange", opacity: "0.7" }}
            w={isSmallerThan576 ? "100%" : "65%"}
            color="white"
            background="orange"
          >
            <Image mr="20px" src={cart} />
            <Text>Add to cart</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProductDetail
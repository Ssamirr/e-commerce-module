import React, { useContext } from 'react'
import { Box, Flex, Heading, Image, Text, Popover, PopoverTrigger, PopoverContent, Button } from '@chakra-ui/react'
import { mainContext } from '../context/ProductContext';
import image1 from '../images/image-product-1.jpg'
import deleteIcon from '../images/icon-delete.svg'
import cart from '../images/icon-cart.svg'




function Cart() {
    let { products, setProducts, ToastProduct, isSmallerThan576 } = useContext(mainContext);

    const deleteItem = () => {
        setProducts(0);
        ToastProduct('Products deleted', "Select the quantity", 'error')
    }


    return (
        <Popover >
            <PopoverTrigger>
                <Button p={isSmallerThan576 && "0px"} bg="#fff">
                    <Image src={cart} />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                w={isSmallerThan576 ? "90vw" : "20rem"}
                mr={isSmallerThan576 && "5vw"}
                mt="15px"
            >
                <Box boxShadow="0 0 12px #000" borderRadius="10px">
                    <Heading borderBottom="1px solid gray" p="10px" size="md">Cart</Heading>
                    {products === 0 ?
                        <Text
                            fontWeight='700'
                            h="150px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize='md'>
                            Your cart is empty
                        </Text>
                        :
                        <Flex p="10px" justify="space-between" align="center">
                            <Image borderRadius="5px" w="50px" src={image1} />
                            <Box fontWeight="700">
                                <Text opacity="0.6">Fall Limited Edition Sneakers</Text>
                                <Text opacity="0.6" as="span">$125 x {products}</Text> 
                                <Text as="span" >${(125 * products).toFixed(2)}</Text>
                            </Box>
                            <Image onClick={deleteItem} src={deleteIcon} />
                        </Flex>
                    }
                </Box>
            </PopoverContent>
        </Popover>
    )
}

export default Cart
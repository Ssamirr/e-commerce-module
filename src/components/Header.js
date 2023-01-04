import React, { useContext } from 'react'
import cart from '../images/icon-cart.svg'
import logo from '../images/logo.svg'
import avatar from '../images/image-avatar.png'
import { Box, Flex, Heading, UnorderedList, ListItem, Image, Text, Popover, PopoverTrigger, PopoverContent, Button, Container } from '@chakra-ui/react'
import { mainContext } from '../context/ProductContext'
import image1 from '../images/image-product-1.jpg'
import deleteIcon from '../images/icon-delete.svg'


function Header() {

    let { count, setCount, products, setProducts, ToastProduct } = useContext(mainContext);

    const deleteItem = () => {
        setProducts(0);
        ToastProduct('Products deleted', "Select the quantity", 'error')
    }

    return (
        <>
            <Container maxW='container.xl'>
                <Flex borderBottom="1px solid gray" height="100px" alignItems='center' justifyContent="space-between">
                    <Box display="flex" h="100%" alignItems="center">
                        <Heading mr="60px">
                            <Image src={logo} />
                        </Heading>
                        <UnorderedList display="flex" listStyleType="none" h="100%" alignItems="center">
                            <ListItem h="100%" display="flex" alignItems="center" cursor="pointer" borderBottom="4px solid #fff" transition="0.3s ease all" fontWeight="bold" _hover={{ borderBottom: "4px solid orange", opacity: "1" }} opacity="0.6" mr="10px">Collections</ListItem>
                            <ListItem h="100%" display="flex" alignItems="center" cursor="pointer" borderBottom="4px solid #fff" transition="0.3s ease all" fontWeight="bold" _hover={{ borderBottom: "4px solid orange", opacity: "1" }} opacity="0.6" mr="10px">Men</ListItem>
                            <ListItem h="100%" display="flex" alignItems="center" cursor="pointer" borderBottom="4px solid #fff" transition="0.3s ease all" fontWeight="bold" _hover={{ borderBottom: "4px solid orange", opacity: "1" }} opacity="0.6" mr="10px">Women</ListItem>
                            <ListItem h="100%" display="flex" alignItems="center" cursor="pointer" borderBottom="4px solid #fff" transition="0.3s ease all" fontWeight="bold" _hover={{ borderBottom: "4px solid orange", opacity: "1" }} opacity="0.6" mr="10px">About</ListItem>
                            <ListItem h="100%" display="flex" alignItems="center" cursor="pointer" borderBottom="4px solid #fff" transition="0.3s ease all" fontWeight="bold" _hover={{ borderBottom: "4px solid orange", opacity: "1" }} opacity="0.6" mr="10px">Contact</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Flex align='center'>
                            <UnorderedList listStyleType="none">
                                <Flex align='center'>
                                    <ListItem pos="relative" cursor="pointer" mr="30px">
                                        <Text zIndex="3" fontSize="0.6rem" fontWeight="bold" px="5px" right="7px" py="1px" borderRadius="10px" pos="absolute" color="#fff" background="orange">{products}</Text>
                                        <Popover >
                                            <PopoverTrigger>
                                                <Button bg="#fff">
                                                    <Image src={cart} />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent mt="15px">
                                                <Box boxShadow="0 0 12px #000" borderRadius="10px">
                                                    <Heading borderBottom="1px solid gray" p="10px" size="md">Cart</Heading>
                                                    {products === 0 ?
                                                        <Text fontWeight='bold' h="150px" display="flex" alignItems="center" justifyContent="center" fontSize='md'>Your cart is empty</Text>
                                                        :
                                                        <Flex p="10px" justify="space-between" align="center">
                                                            <Image borderRadius="5px" w="50px" src={image1} />
                                                            <Box fontWeight="bold">
                                                                <Text opacity="0.6">Fall Limited Edition Sneakers</Text>
                                                                <Text opacity="0.6" as="span">$125 x {products}</Text> <Text as="span" >${(125 * products).toFixed(2)}</Text>
                                                            </Box>
                                                            <Image onClick={deleteItem} src={deleteIcon} />
                                                        </Flex>
                                                    }
                                                </Box>
                                            </PopoverContent>
                                        </Popover>
                                    </ListItem>
                                    <ListItem>
                                        <Image transition="0.3s ease all" border="2px solid white" cursor="pointer" borderRadius="50%" _hover={{ border: "2px solid orange" }} width="50px" src={avatar} />
                                    </ListItem>
                                </Flex>
                            </UnorderedList>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default Header
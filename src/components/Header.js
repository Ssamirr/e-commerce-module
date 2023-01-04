import React, { useContext } from 'react'
import logo from '../images/logo.svg'
import avatar from '../images/image-avatar.png'
import { Box, Flex, Heading, UnorderedList, ListItem, Image, Text, Container } from '@chakra-ui/react'
import { mainContext } from '../context/ProductContext'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Cart from './Cart'


function Header() {


    let { products, isLargerThan992, isSmallerThan576 } = useContext(mainContext);

    return (
        <>
            <Container maxW={isSmallerThan576 ? "95%" : "85%"}>
                <Flex
                    borderBottom={isSmallerThan576 ? "none" : "1px solid gray"}
                    height="100px"
                    alignItems='center'
                    justifyContent="space-between"
                >
                    <Box
                        display="flex"
                        flexDirection={isLargerThan992 ? "row" : "row-reverse"}
                        h="100%"
                        alignItems="center"
                    >
                        <Heading mr="60px">
                            <Image src={logo} />
                        </Heading>
                        {isLargerThan992 ?
                            <DesktopMenu />
                            :
                            <MobileMenu />
                        }
                    </Box>

                    <Box>
                        <Flex align='center'>
                            <UnorderedList listStyleType="none">
                                <Flex align='center'>

                                    <ListItem
                                        pos="relative"
                                        cursor="pointer"
                                        mr={isSmallerThan576 ? "5px" : "30px"}
                                    >
                                        {products !== 0 &&
                                            <Text
                                                zIndex="3"
                                                fontSize="0.6rem"
                                                fontWeight="700"
                                                px="5px"
                                                right="7px"
                                                py="1px"
                                                borderRadius="10px"
                                                pos="absolute"
                                                color="#fff"
                                                background="orange">
                                                {products}
                                            </Text>
                                        }
                                        <Cart />
                                    </ListItem>

                                    <ListItem>
                                        <Image
                                            transition="0.3s ease all"
                                            border="2px solid white"
                                            cursor="pointer"
                                            borderRadius="50%"
                                            _hover={{ border: "2px solid orange" }}
                                            width="50px" src={avatar}
                                        />
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
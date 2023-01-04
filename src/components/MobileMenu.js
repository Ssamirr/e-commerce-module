import React from 'react'
import { UnorderedList, ListItem, Image, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import menuIcon from '../images/icon-menu.svg'


function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Image cursor={"pointer"} ref={btnRef} onClick={onOpen} mr="10px" mt="5px" src={menuIcon} />
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent w="65%" maxW="65%">
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>

                        <UnorderedList display="flex" flexDirection="column" listStyleType="none">

                            <ListItem
                                fontSize="1.2rem"
                                mb="10px"
                                cursor="pointer"
                                transition="0.3s ease all"
                                fontWeight="700"
                                _hover={{ color: "orange" }}  >
                                Collections
                            </ListItem>

                            <ListItem
                                fontSize="1.2rem"
                                mb="10px"
                                cursor="pointer"
                                transition="0.3s ease all"
                                fontWeight="700"
                                _hover={{ color: "orange" }}  >
                                Men
                            </ListItem>

                            <ListItem
                                fontSize="1.2rem"
                                mb="10px"
                                cursor="pointer"
                                transition="0.3s ease all"
                                fontWeight="700"
                                _hover={{ color: "orange" }}  >
                                Women
                            </ListItem>

                            <ListItem
                                fontSize="1.2rem"
                                mb="10px"
                                cursor="pointer"
                                transition="0.3s ease all"
                                fontWeight="700"
                                _hover={{ color: "orange" }}  >
                                About
                            </ListItem>

                            <ListItem
                                fontSize="1.2rem"
                                mb="10px"
                                cursor="pointer"
                                transition="0.3s ease all"
                                fontWeight="700"
                                _hover={{ color: "orange" }}  >
                                Contact
                            </ListItem>

                        </UnorderedList>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu
import React from 'react'
import { UnorderedList, ListItem } from '@chakra-ui/react'


function DesktopMenu() {

    return (
        <UnorderedList display="flex" listStyleType="none" h="100%" alignItems="center">

            <ListItem
                h="100%"
                display="flex"
                alignItems="center"
                cursor="pointer"
                borderBottom="4px solid #fff"
                transition="0.3s ease all"
                fontWeight="700"
                _hover={{ borderBottom: "4px solid orange", opacity: "1" }}
                opacity="0.6"
                mr="10px">
                Collections
            </ListItem>

            <ListItem
                h="100%"
                display="flex"
                alignItems="center"
                cursor="pointer"
                borderBottom="4px solid #fff"
                transition="0.3s ease all"
                fontWeight="700"
                _hover={{ borderBottom: "4px solid orange", opacity: "1" }}
                opacity="0.6" mr="10px">
                Men
            </ListItem>

            <ListItem
                h="100%"
                display="flex"
                alignItems="center"
                cursor="pointer"
                borderBottom="4px solid #fff"
                transition="0.3s ease all"
                fontWeight="700"
                _hover={{ borderBottom: "4px solid orange", opacity: "1" }}
                opacity="0.6"
                mr="10px">
                Women
            </ListItem>

            <ListItem
                h="100%"
                display="flex"
                alignItems="center"
                cursor="pointer"
                borderBottom="4px solid #fff"
                transition="0.3s ease all"
                fontWeight="700"
                _hover={{ borderBottom: "4px solid orange", opacity: "1" }}
                opacity="0.6"
                mr="10px">
                About
            </ListItem>

            <ListItem
                h="100%"
                display="flex"
                alignItems="center"
                cursor="pointer"
                borderBottom="4px solid #fff"
                transition="0.3s ease all"
                fontWeight="700"
                _hover={{ borderBottom: "4px solid orange", opacity: "1" }}
                opacity="0.6"
                mr="10px">
                Contact
            </ListItem>
            
        </UnorderedList>
    )
}

export default DesktopMenu
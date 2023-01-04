// import { Container, Grid } from '@chakra-ui/react'
import { Box, Container, Grid } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Product from '../components/Product'
import ProductDetail from '../components/ProductDetail'
import { mainContext } from '../context/ProductContext';

function Home() {
    let { isLargerThan992,isSmallerThan576 } = useContext(mainContext);

    return (
        <Container maxW= {isSmallerThan576 ? "100%" : "85%"} p={isSmallerThan576 && "0"}>
            {isLargerThan992 ?
                <Grid px="50px" py="100px" gap={24} templateColumns='repeat(2, 1fr)'>
                    <Product />
                    <ProductDetail />
                </Grid>
                :
                <Box mt= {isSmallerThan576 ? "0px" : "50px"}>
                    <Product />
                    <ProductDetail />
                </Box> 
            } 
        </Container>
    )
}

export default Home
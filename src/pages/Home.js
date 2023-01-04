// import { Container, Grid } from '@chakra-ui/react'
import { Container, Grid } from '@chakra-ui/react'
import React from 'react'
import Product from '../components/Product'
import ProductDetail from '../components/ProductDetail'

function Home() {
    return (
        <Container maxW='container.xl'>
            <Grid px="50px" py="100px" gap={24} templateColumns='repeat(2, 1fr)'>
                <Product />
                <ProductDetail />
            </Grid>
        </Container>
    )
}

export default Home
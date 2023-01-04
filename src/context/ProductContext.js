import { useToast } from '@chakra-ui/react';
import React, { createContext, useState } from 'react'
import image1 from '../images/image-product-1.jpg'

export const mainContext = createContext(null)

function ProductContext({ children }) {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState(0);
    const [productImg, setProductImg] = useState(image1);

    const toast = useToast()
    function ToastProduct(title, description, status) {
        toast({
            title,
            description,
            status,
            duration: 3000,
            isClosable: true,
        })
    }


    const values = {
        count,
        setCount,
        products,
        setProducts,
        ToastProduct,
        productImg,
        setProductImg
    }
    return (
        <>
            <mainContext.Provider value={values}>{children}</mainContext.Provider>
        </>
    )
}

export default ProductContext
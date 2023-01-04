import { useMediaQuery, useToast } from '@chakra-ui/react';
import React, { createContext, useState } from 'react'
import image1 from '../images/image-product-1.jpg'
import image2 from '../images/image-product-2.jpg'
import image3 from '../images/image-product-3.jpg'
import image4 from '../images/image-product-4.jpg'

export const mainContext = createContext(null)

function ProductContext({ children }) {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState(0);
    const [productImg, setProductImg] = useState(image1);
    const SlideData = [image1, image2, image3, image4]
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
    const [isSmallerThan576] = useMediaQuery('(max-width: 576px)');

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
        setProductImg,
        SlideData,
        isLargerThan1200,
        isLargerThan992,
        isSmallerThan576
    }
    return (
        <>
            <mainContext.Provider value={values}>{children}</mainContext.Provider>
        </>
    )
}

export default ProductContext
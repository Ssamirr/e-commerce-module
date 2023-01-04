import React, { useContext } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { mainContext } from '../context/ProductContext';


function ArrowIcons() {

    let { productImg, setProductImg, SlideData } = useContext(mainContext);


    const arrowBackImg = () => {
        let currentIndex = SlideData.indexOf(productImg);
        let previousImg
        if (currentIndex === 0) {
            previousImg = SlideData[SlideData.length - 1];
        } else {
            previousImg = SlideData[currentIndex - 1];

        }
        setProductImg(previousImg)
    }

    const arrowForwardImg = () => {
        let currentIndex = SlideData.indexOf(productImg);
        let nextImg
        if (currentIndex === SlideData.length - 1) {
            nextImg = SlideData[0];
        } else {
            nextImg = SlideData[currentIndex + 1];

        }
        setProductImg(nextImg)
    }

    return (
        <>
            <ChevronLeftIcon
                onClick={arrowBackImg}
                _hover={{ color: "orange" }}
                cursor="pointer"
                transition="0.3s ease all"
                bg="white"
                w="42px"
                borderRadius="50%"
                h="42px"
                pos="absolute"
                left="0"
                top="50%"
                transform="translate(0%,-50%)"
            />
            <ChevronRightIcon
                onClick={arrowForwardImg}
                _hover={{ color: "orange" }}
                cursor="pointer"
                transition="0.3s ease all"
                bg="white"
                w="42px"
                borderRadius="50%"
                h="42px"
                pos="absolute"
                right="0"
                top="50%"
                transform="translate(0%,-50%)"
            />
        </>
    )
}

export default ArrowIcons
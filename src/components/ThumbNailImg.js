import React, { useContext } from 'react'
import { Flex, Image } from '@chakra-ui/react';
import { mainContext } from '../context/ProductContext';


function ThumbNailImg() {

    let { productImg, setProductImg, SlideData } = useContext(mainContext);


    return (
        <Flex justify="space-between" mt="30px">
            {React.Children.toArray(
                SlideData.map(item => (
                    <Image
                        border={item === productImg ? "2px solid orange" : "2px solid white"}
                        opacity={item === productImg && "0.6"}
                        onClick={() => setProductImg(SlideData.find(q => q === item))}
                        _hover={{ border: "2px solid orange", opacity: "0.6" }}
                        transition="0.3s ease all"
                        cursor="pointer"
                        borderRadius="10px"
                        w="calc(100%/5)"
                        src={item}
                    />

                )))
            }
        </Flex>
    )
}

export default ThumbNailImg
import { Box, Button, Image, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Fancybox from "./Fancybox.js";

const ImageSlider = ({ slides }) => {

    return (
        <>
            {/* <Fancybox> */}

            <Carousel
                infiniteLoop
                showIndicators={false}
                showArrows={false}
                showThumbs
                useKeyboardArrows
                showStatus={false}
                thumbWidth={110}
            >
                {React.Children.toArray(
                    slides.map((slide) => {
                        return <img data-fancybox="gallery" src={slide.image} />
                    }))}
            </Carousel>
                {/* {React.Children.toArray(
                    slides.map((slide) => {
                        return <img data-fancybox="gallery" src={slide.image} />
                    }))} */}
            {/* </Fancybox> */}
        </>
    );
};

export default ImageSlider;
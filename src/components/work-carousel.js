import { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const WorkCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrowSize = useBreakpointValue({ base: 'sm', md: 'md' });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const buttonStyles = {
    bg: 'whiteAlpha.700',
    color: 'gray.800',
    variant: 'ghost',
    boxShadow: 'lg',
    borderRadius: 'full',
    opacity: '0.8',
    mx: 2,
    _hover: {
      bg: 'whiteAlpha.800',
      opacity: '1'
    }
  };

  return (
    <Box position="relative" width="100%">
      <Image
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="grid-item-thumbnail"
        placeholder="blur"
      />

      {images.length > 1 && (
        <>
          <IconButton
            aria-label="Previous image"
            icon={<ChevronLeftIcon w={5} h={5} opacity={0.8} />}
            onClick={previousImage}
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            size={arrowSize}
            {...buttonStyles}
          />
          <IconButton
            aria-label="Next image"
            icon={<ChevronRightIcon w={5} h={5} opacity={0.8} />}
            onClick={nextImage}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            size={arrowSize}
            {...buttonStyles}
          />
        </>
      )}
    </Box>
  );
};

export default WorkCarousel;
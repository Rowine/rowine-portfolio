import { useState } from 'react';
import { Box, IconButton, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';

const WorkCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <>
      <Box position="relative" width="100%">
        <Box 
          onClick={() => setIsModalOpen(true)}
          cursor="pointer"
          _hover={{ opacity: 0.9 }}
          transition="opacity 0.2s"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
        </Box>

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

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        size="6xl"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw" maxH="90vh">
          <ModalCloseButton 
            color="white" 
            bg="whiteAlpha.200"
            borderRadius="full"
            size="lg"
            m={4}
            _hover={{ bg: 'whiteAlpha.300' }}
          />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            <Box 
              position="relative" 
              width="100%" 
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1} (Full Size)`}
                style={{ 
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  width: 'auto',
                  height: 'auto'
                }}
                quality={100}
              />
              {images.length > 1 && (
                <>
                  <IconButton
                    aria-label="Previous image"
                    icon={<ChevronLeftIcon w={6} h={6} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      previousImage();
                    }}
                    position="absolute"
                    left={4}
                    {...buttonStyles}
                    size="lg"
                  />
                  <IconButton
                    aria-label="Next image"
                    icon={<ChevronRightIcon w={6} h={6} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    position="absolute"
                    right={4}
                    {...buttonStyles}
                    size="lg"
                  />
                </>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WorkCarousel;
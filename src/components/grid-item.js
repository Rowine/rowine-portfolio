import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Badge, Button, HStack } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Global } from '@emotion/react';
import WorkCarousel from './work-carousel';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, href, githubHref, title, thumbnail, thumbnails, isDown }) => (
  <Box w="100%" align="center">
    {thumbnails ? (
      <WorkCarousel images={thumbnails} title={title} />
    ) : (
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
    )}

    <HStack spacing={4} justify="center" mt={2}>
      <Button
        as="a"
        href={href}
        target="_blank"
        leftIcon={<FaExternalLinkAlt />}
        colorScheme="teal"
        size="sm"
      >
        Visit Website
      </Button>
      {githubHref && (
        <Button
          as="a"
          href={githubHref}
          target="_blank"
          leftIcon={<FaGithub />}
          colorScheme="gray"
          size="sm"
        >
          View Code
        </Button>
      )}
    </HStack>

    <Text mt={2} fontSize={20}>
      {title}
      {isDown && (
        <p>
          <Badge variant="outline" colorScheme="purple">
            Currently down
          </Badge>
        </p>
      )}
    </Text>

    <Text fontSize={14} mb={4}>{children}</Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
        border-radius: 12px
        }
        `}
  />
);

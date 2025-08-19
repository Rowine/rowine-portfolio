'use client';

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Button,
  Icon
} from '@chakra-ui/react';
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import Works from './works';

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        A developer who loves to code and drink coffee. Let&apos;s chat about my experiences over a virtual coffee! ☕
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rowine Mabiog
          </Heading>
          <p>Full Stack Javascript Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            width="100px"
            height="100px"
            display="inline-block"
            borderRadius="full"
            objectFit="cover"
            objectPosition="center"
            src="/images/rowine.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Rowine is currently a Computer Engineering Student from Polytechnic
          University of the Philippines. He have experience working with
          Javascript, React, and Python. He is also interested in learning new
          technologies and frameworks. He is a self-taught developer and learned
          most of his skills through online tutorials and documentations. He is
          also a member of the{' '}
          <Link href="https://www.linkedin.com/company/the-programmers-guild" target="_blank">PUP The Programmers Guild</Link> and a Frontend Lead Associate at <Link href="https://www.linkedin.com/company/gdgpup" target="_blank">Google Developer Student Clubs - PUP</Link>. He
          had internship experience as a Frontend Developer at{' '}
          <Link href="https://pixel8websolutions.com/" target="_blank">
            Pixel8 Web Solutions & Consultancy Inc.
          </Link>
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          Coffee, Basketball, Running,Video Games, Anime, Coding, Machine Learning and more!
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Works />
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Rowine" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} mt={1} />}
              >
                @Rowine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ro.mabiog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} mt={1} />}
              >
                @ro.mabiog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoDiscord} mt={1} />}
            >
              xzcion
            </Button>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

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
  Icon,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoDocumentText
} from 'react-icons/io5';
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
        A developer who loves to code and drink coffee. Let&apos;s chat about my
        experiences over a virtual coffee! ☕
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rowine Mabiog
          </Heading>
          <p>Software Engineer</p>
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
          Rowine is a Software Engineer at{' '}
          <Link href="https://www.whitecloak.com/" target="_blank">
            White Cloak Technologies, Inc.
          </Link>{' '}
          and a Computer Engineering graduate from the Polytechnic University of
          the Philippines. He works with TypeScript, React/Next.js, NestJS, and
          Python, and enjoys learning new technologies and frameworks. He is a
          self-taught developer who picked up most of his skills through online
          tutorials and documentation. He is always exploring the cutting edge
          of AI tools like Claude and ChatGPT, growing into AI-native
          engineering while making sure every generated change is reviewed,
          tested, and validated before it ships.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Box mb={4}>
          <Text fontWeight="bold">
            Software Engineer,{' '}
            <Link href="https://www.whitecloak.com/" target="_blank">
              White Cloak Technologies, Inc.
            </Link>
          </Text>
          <Text fontSize="sm" opacity={0.7} mb={2}>
            Dec 2025 – Present
          </Text>
          <UnorderedList spacing={1}>
            <ListItem>
              Built the document management system of an enterprise ERP
              platform: role-based sharing and tenant-scoped access control,
              e-signature requests, PDF preview, drag-and-drop organization, and
              faster folder-tree queries
            </ListItem>
            <ListItem>
              Developed a provider marketplace module end to end, from the
              customer dashboard to online payments and digitally signed
              documents
            </ListItem>
            <ListItem>
              Build and maintain application-processing portals for a government
              client: deadline tracking, prioritized review queues, document
              signing, bug fixes and performance optimization
            </ListItem>
            <ListItem>
              Also contributed to a booking application and a loan application
            </ListItem>
            <ListItem>
              Use AI tools like Claude and ChatGPT in a spec-first workflow:
              define acceptance criteria up front, let AI draft against them,
              then review, test and security-check every change, rejecting
              unsafe generated code before it ships
            </ListItem>
          </UnorderedList>
          <Text fontSize="sm" mt={2}>
            Stack: TypeScript, Next.js, NestJS, Prisma, PostgreSQL
          </Text>
        </Box>
        <Box>
          <Text fontWeight="bold">
            Frontend Developer Intern,{' '}
            <Link href="https://pixel8websolutions.com/" target="_blank">
              Pixel8 Web Solutions & Consultancy Inc.
            </Link>
          </Text>
        </Box>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          Coffee, Basketball, Running,Video Games, Anime, Coding, Machine
          Learning and more!
        </Paragraph>
      </Section>
      <Section delay={0.4}>
        <Works />
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="/Rowine_Mabiog_Resume.pdf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoDocumentText} mt={1} />}
              >
                Resume
              </Button>
            </Link>
          </ListItem>
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

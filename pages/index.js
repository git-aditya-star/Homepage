import NextLink from 'next/link'
import {
  Flex,
  Tag,
  Text,
  TagLabel,
  Button,
  Icon,
  SimpleGrid,
  List,
  ListItem,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  UnorderedList
} from '@chakra-ui/react'
import Section from '../components/section'

import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiCodechef } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'


function Summary() {
  return (
    <Box
  w="90%"
  h="60%"
  mt={10}
  borderRadius="50%/70%"
  borderWidth={6}
  borderStyle="solid"
  borderColor="whiteAlpha.500"
  bg="whiteAlpha.500"
  position="relative"
  overflow="hidden"
>
  <Box
    position="absolute"
    top="-25%"
    left="-20%"
    w="140%"
    h="150%"

    transform="rotate(-30deg)"
    zIndex="-1"
    opacity="0.2"
    borderRadius="50%"
  ></Box>
  <Box
    textAlign="center"
    p={10}
    position="relative"
    zIndex="1"
  >
    Software Engineer with expertise in Java, Spring Boot, MySQL, ReactJS, and AWS with a passion for solving complex problems and creating innovative solutions
  </Box>
</Box>
  );
}


const Page = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'VueJS',
    'ReactJS',
    'Redux',
    'Flutter',
    'Python',
    'Java',
    'Spring Boot',
    'Spring Data',
    'Spring MVC',
    'Spring Security',
    'Spring JPA',
    'MySQL',
    'PLSQL',
    'MongoDB',
    'AWS',
    'S3',
    'EC2',
    'IAM',
    'Route53',
    'VPC',
    'RDS',
    'CloudFront',
    'Kubernetes',
    'TensorFlow',
    'Keras',
    'Data Structures & Algorithms',
    'C++'
  ]
  const colorScheme = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box
          borderRadius="lg"
          bg={colorScheme}
          p={3}
          mb={6}
          mt={2}
          align="center"
        >
          Hello, I&apos;m a Final Year Student at Vishwakarma Institute of
          Technology, Pune!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" fontFamily="cursive">
              Aditya Chavan
            </Heading>
            
            <Summary />
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
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src="aditya.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <>
            <Box marginLeft="1em" display="flex" justifyContent="space-between">
              <Text textAlign="left">
                Bachelor of Technology (Btech) – Computer Science
              </Text>
              <Text textAlign="right">CGPA – 9.38</Text>
            </Box>
          </>
          <>
            <Box marginLeft="1em" display="flex" justifyContent="space-between">
              <Text textAlign="left">
                Vishwakarma Institute of Technology, Pune
              </Text>
              <Text textAlign="right">(2019 – 2023)</Text>
            </Box>
          </>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <Paragraph style={{ fontWeight: 'bold' }}>
            Software Engineer Intern
          </Paragraph>
          <Paragraph>Entytle, Inc · Internship</Paragraph>
          <Paragraph style={{ fontStyle: 'italic' }}>
            Jul 2022 - current
          </Paragraph>
          <Paragraph>(Spring Boot, Java, ReactJS, MySQL, AWS, PLSQL)</Paragraph>
          <List marginLeft="1em">
            <UnorderedList>
              <ListItem>
                Increased Database Query speed using <b>Indexes</b>, Created a
                Backend <b>Scheduler</b> service for data validation every day.
              </ListItem>
              <ListItem>
                Boosted <b>Data Ingestion and Update</b> performance via
                efficient MySQL stored procedures.
              </ListItem>
              <ListItem>
                Automated <b>AMI</b> backup for any number of instances,
                ensuring <b>7-day</b> retention for improved{' '}
                <b>disaster recovery</b>.
              </ListItem>
              <ListItem>
                Reduced AWS S3 <b>storage costs</b> by optimizing object storage
                classes for specific file types, root paths, and prefix
                locations based on usage patterns.
              </ListItem>
              <ListItem>
                Implemented efficient and modular <b>REST APIs</b> with the MVC
                pattern.
              </ListItem>
            </UnorderedList>
          </List>
          <Paragraph style={{ fontWeight: 'bold', marginTop: '1em' }}>
            Software Development Intern
          </Paragraph>
          <Paragraph>Finarkein Analytics · Internship</Paragraph>
          <Paragraph style={{ fontStyle: 'italic' }}>
            Mar 2022 - May 2022
          </Paragraph>
          <Paragraph>(VueJS, TypeScript)</Paragraph>
          <List marginLeft="1em">
            <UnorderedList>
              <ListItem>
                Implemented secure login with <b>site redirection</b> and
                separate login flow on different site, featuring{' '}
                <b>state management and data fetching</b>, and{' '}
                <b>redirecting</b> the user back to the original website after
                successful login.
              </ListItem>
              <ListItem>
                Analysed and generated different <b>data cache</b> strategies
                for data fetch and storage with <b>different origins</b>.
              </ListItem>
              <ListItem>
                <b>Continuous</b> data polling with <b>time delay</b> (5 sec)
                and <b>Error Handlers</b> for different <b>HTTP</b> Errors.
              </ListItem>
              <ListItem>
                Designed Login and Registration flows featuring{' '}
                <b>Phone Authentication</b> using Firebase.
              </ListItem>
            </UnorderedList>
          </List>
        </Section>

        <Section delay={0.1}>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Skills
            </Heading>
            <Flex flexWrap="wrap" style={{ marginLeft: '1em' }}>
              {skills.map((skill, index) => (
                <Tag
                  key={index}
                  mr={2}
                  mt={2}
                  size="lg"
                  variant="subtle"
                  bg={colorScheme}
                >
                  <TagLabel>{skill}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Section>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Publications
          </Heading>
          <Paragraph style={{ fontWeight: 'bold' }}>
            Finger Motion Capture for Sign Language Interpretation
          </Paragraph>
          <Text style={{ marginLeft: '1em' }}>
            International Journal For Research in Applied Science & Engineering
            Technology | Aug 10, 2022
          </Text>
          <Paragraph>
            <Link
              href="https://www.ijraset.com/best-journal/finger-motion-capture-for-sign-language-interpretation"
              target="_blank"
            >
              See Publication
            </Link>
          </Paragraph>
          <Paragraph style={{ fontWeight: 'bold', marginTop: '10px' }}>
            Types of data binding with template in Vue.js
          </Paragraph>
          <Paragraph>GeeksforGeeks | Apr 4, 2022</Paragraph>
          <Paragraph>
            <Link
              href="https://www.geeksforgeeks.org/types-of-data-binding-with-template-in-vue-js/"
              target="_blank"
            >
              See Publication
            </Link>
          </Paragraph>

          <Paragraph style={{ fontWeight: 'bold', marginTop: '10px' }}>
            Machine Learning Applications by Google
          </Paragraph>
          <Paragraph>GeeksforGeeks | Mar 2, 2022</Paragraph>
          <Paragraph>
            <Link
              href="https://www.geeksforgeeks.org/machine-learning-applications-by-google/"
              target="_blank"
            >
              See Publication
            </Link>
          </Paragraph>

          <Paragraph style={{ fontWeight: 'bold', marginTop: '10px' }}>
            Windows Memory Management
          </Paragraph>
          <Paragraph>GeeksforGeeks | Jan 18, 2022</Paragraph>
          <Paragraph>
            <Link
              href="https://www.geeksforgeeks.org/windows-memory-managment/"
              target="_blank"
            >
              See Publication
            </Link>
          </Paragraph>

          <Paragraph style={{ fontWeight: 'bold', marginTop: '10px' }}>
            Utility of Hashing In Recent Technologies
          </Paragraph>
          <Paragraph>GeeksforGeeks | Oct 5, 2021</Paragraph>
          <Paragraph>
            <Link
              href="https://www.geeksforgeeks.org/utility-of-hashing-in-recent-technologies/"
              target="_blank"
            >
              See Publication
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Maharashtra, India.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Will Complete Computer Science Engineering, Btech at Vishwakarma
            Institute of Technology, Pune.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Music, Competitive Coding, Learning New Technologies.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/git-aditya-star" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @git-aditya-star
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/aditya-sandeep-chavan/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Aditya Chavan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.codechef.com/users/aditya770"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={SiCodechef} />}
                >
                  @aditya770
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/_a_d_i_i_._/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @_a_d_i_i_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:adichavan095@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FiMail} />}
                >
                  @adichavan095@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

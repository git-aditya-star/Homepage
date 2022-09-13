import NextLink from  'next/link'
import { Button, Icon, SimpleGrid,List, ListItem,Container , Box , Heading , Image, Link, useColorModeValue} from "@chakra-ui/react"
import Section from "../components/section"

import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import {
    
    IoLogoInstagram,
    IoLogoGithub,

    IoLogoLinkedin
} from 'react-icons/io5'
import  {
    SiCodechef
} from 'react-icons/si'
import {
    FiMail
} from 'react-icons/fi'


const Page= () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} mt={2} align="center">
                Hello, I&apos;m a Fourth Year Student at Vishwakarma Institute of Technology, Pune!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" fontFamily="cursive">
                        Aditya Chavan
                    </Heading>
                    <p>I&apos;m a 3 star @CodeChef ( Web / Android / Deep Learning )</p>
                </Box>
                <Box flexShrink={0} mt={{base:4 , md:0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth = "100px" display="inline-block" borderRadius= "full" src="aditya.jpg" alt="Profile Image" />
                </Box>
            </Box> 
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Experience
                </Heading>
                <Paragraph style={{'fontWeight':'bold'}}>Software Development Intern</Paragraph>
                <Paragraph>Finarkein Analytics · Internship</Paragraph>
                <Paragraph style={{'fontStyle': 'italic'}}>Mar 2022 - May 2022</Paragraph>
                <Paragraph style={{'fontWeight':'bold'}}>Software Engineer Intern</Paragraph>
                <Paragraph>Entytle, Inc · Internship</Paragraph>
                <Paragraph style={{'fontStyle': 'italic'}}>Jul 2022 - current</Paragraph>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                I have an interactive personality. <br/>
                Real Industry Experience with Frontend VueJs, TypeScript, Integration with backend REST API endpoints, State Management, Phone Auth, Storage Strategies. <br/>
                Worked on UI and REST API integration in flutter and javaFx, CNN architecture for image classification, Backend with MySql PHP. <br/>
                Spring Boot -&gt; Web, JPA, Security, JWT, H2, MySql, JDBC, Thymeleaf, Lombok. <br/>
                Interested to learn about Backend Technologies NodeJs. <br />
                AWS -&gt; IAM, s3, cloudfront, EC2, RDS, dynamoDB, Route53, VPC. <br />
                Proficient in Data Structures and Algorithms.
                </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon /> } colorScheme ="teal">My Portfolio</Button>
                </NextLink>
            </Box>
            
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Publications
                </Heading>
                <Paragraph style={{'fontWeight':'bold'}}>Types of data binding with template in Vue.js</Paragraph>
                <Paragraph>GeeksforGeeks | Apr 4, 2022</Paragraph>
                <Paragraph>
                    <Link href='https://www.geeksforgeeks.org/types-of-data-binding-with-template-in-vue-js/' target="_blank">See Publication</Link>
                </Paragraph>

                <Paragraph style={{'fontWeight':'bold', 'marginTop':'10px'}}>Machine Learning Applications by Google</Paragraph>
                <Paragraph>GeeksforGeeks | Mar 2, 2022</Paragraph>
                <Paragraph>
                    <Link href='https://www.geeksforgeeks.org/machine-learning-applications-by-google/' target="_blank">See Publication</Link>
                </Paragraph>

                <Paragraph style={{'fontWeight':'bold', 'marginTop':'10px'}}>Windows Memory Management</Paragraph>
                <Paragraph>GeeksforGeeks | Jan 18, 2022</Paragraph>
                <Paragraph>
                    <Link href='https://www.geeksforgeeks.org/windows-memory-managment/' target="_blank">See Publication</Link>
                </Paragraph>

                <Paragraph style={{'fontWeight':'bold', 'marginTop':'10px'}}>Utility of Hashing In Recent Technologies</Paragraph>
                <Paragraph>GeeksforGeeks | Oct 5, 2021</Paragraph>
                <Paragraph>
                    <Link href='https://www.geeksforgeeks.org/utility-of-hashing-in-recent-technologies/' target="_blank">See Publication</Link>
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
                    Will Complete Computer Science Engineering, Btech at Vishwakarma Institute of Technology, Pune.
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
                <Heading as="h3" variant ="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href='https://github.com/git-aditya-star' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as= {IoLogoGithub} />}>
                                @git-aditya-star
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.linkedin.com/in/aditya-sandeep-chavan/' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as= {IoLogoLinkedin} />}>
                                @Aditya Chavan
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.codechef.com/users/aditya770' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as= {SiCodechef} />}>
                                @aditya770
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.instagram.com/_a_d_i_i_._/' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as= {IoLogoInstagram} />}>
                                @_a_d_i_i_
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='mailto:adichavan095@gmail.com' target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as= {FiMail} />}>
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
import { Container, Heading, SimpleGrid ,Image} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbGFG from '../public/posts/geeksforgeeks.png'
import thumbGFGTrueGeek from '../public/posts/truegeek.png'
import thumbInnovate from '../public/posts/innovateNSUT.jpg'
import thumbCbs from '../public/posts/BBH Aditya.jpg'



const Posts = () => (
    <Layout title= "Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={5} >
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6} >
                    <GridItem title="GFG Article Writing" thumnail={thumbGFG} href="https://www.linkedin.com/feed/update/urn:li:activity:6889253414467973120/" />
                    <GridItem title="GFG True Geek" thumnail={thumbGFGTrueGeek} href="https://www.linkedin.com/feed/update/urn:li:activity:6861040368616529920/" />
                    <GridItem title="InnovateNSUT" thumnail={thumbInnovate} href="https://www.linkedin.com/feed/update/urn:li:activity:6784772089715965952/" />
                    <GridItem title="hackCBS" thumnail={thumbCbs} href="https://www.linkedin.com/feed/update/urn:li:activity:6743405029459333120/" />
                    
                </SimpleGrid>
                 
                 
            </Section>
            <Heading as="h3" fontSize={20} mb={5} >
                Accomplishments
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6} >
                    <Image src="/posts/nvidia.jpg" alt="nvidia" />
                    <Image src="/posts/hackerram.jpg" alt="hackerram" />
                
                    
                    
                </SimpleGrid>
                 
                 
            </Section>
        </Container>
    </Layout>
)

export default Posts
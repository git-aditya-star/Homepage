import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Covid-19 Detection">
            <Container>
                <Title>
                Covid-19 Detection<Badge>2020</Badge>
                </Title>
                <P>
                With lungs X-ray pictures and an informative chatbot, you can test for Covid 19. People may utilise the ML model to have themselves checked in a matter of minutes by uploading their X-ray scans of their lungs. It is incredibly cost-effective, and it relieves the burden of healthcare staff collecting test samples from individuals. It is dependable to a degree, and the accuracy may be increased and applied on a broad scale by employing more powerful neural networks.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Demo</Meta>
                        <Link href="https://www.youtube.com/watch?v=eLR4r2CTVoE">https://www.youtube.com/watch?v=eLR4r2CTVoE <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/Covid-19-detection-using-lung-xrays">https://github.com/git-aditya-star/Covid-19-detection-using-lung-xrays <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Website</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flask, dialogflow, keras, opencv, tensorflow, python</span>
                    </ListItem>
                </List>
                
                <WorkImage src="/covid/covid.jpg" alt="covid" />
                <WorkImage src="/covid/covid1.jpg" alt="covid" />
                <WorkImage src="/covid/covid2.jpg" alt="covid" />
                
                
            </Container>
        </Layout>
    )
}

export default Work
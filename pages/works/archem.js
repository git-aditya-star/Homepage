import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Ar Chemistry">
            <Container>
                <Title>
                    Ar Chemistry<Badge>2021</Badge>
                </Title>
                <P>
                Simulate organic compounds in Augumented Reality. All the students pursuing chemistry knows that how frustrating it is to imagine the structures of organic compounds and associate it with there chemical properties. But with the help of AR CHEMISTRY app you can see the actual structure in augmented reality with image tracking and associate them with there chemical and physical properties.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                        <Meta>Demo</Meta>
                        <Link href="https://www.youtube.com/watch?v=bOpl0QB2c6g">https://www.youtube.com/watch?v=bOpl0QB2c6g <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/AR_chemistry">https://github.com/git-aditya-star/AR_chemistry <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Echo AR, Flutter, Avagadro, Open babel, Blender, Dart</span>
                    </ListItem>
                </List>
                <SimpleGrid columns = {[1,1,2]}  gap={6}>
                <WorkImage src="/home.jpg" alt="Ar Chemistry" />
                <WorkImage src="/description.jpg" alt="Ar Chemistry" />
                <WorkImage src="/archem.jpg" alt="Ar Chemistry" />
                <WorkImage src="/glycerol.jpg" alt="Ar Chemistry" />
                </SimpleGrid>
                
            </Container>
        </Layout>
    )
}

export default Work
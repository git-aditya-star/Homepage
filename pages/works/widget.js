import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Covid-19 Desktop Widget">
            <Container>
                <Title>
                Covid-19 Desktop Widget<Badge>2021</Badge>
                </Title>
                <P>
                A Desktop widget to get the details of Covid-19 cases in any country and world.<br />
                Every 5 minutes, the widget will automatically refresh. The widget is versatile since it can be dragged around. The country can also be modified based on the preferences of the user. The widget uses hardly no RAM at all.

                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/Covid-19-Desktop-Widget">https://github.com/git-aditya-star/Covid-19-Desktop-Widget <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Desktop</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaFx, SceneBuilder, Gradle, Java</span>
                    </ListItem>
                </List>
                
                <WorkImage src="/widget/widget1.jpg" alt="widget" />
                <WorkImage src="/widget/widget2.jpg" alt="widget" />
              
                
                
            </Container>
        </Layout>
    )
}

export default Work
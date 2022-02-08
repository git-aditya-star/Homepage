import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Floating Brush">
            <Container>
                <Title>
                Floating Brush<Badge>2021</Badge>
                </Title>
                <P>
                Upgrade the traditional way of whiteboard by drawing in the air itself.<br />
                It acts as a paint software itself on the real time video feed. It detects a marker (color can be change by adjusting the hue , saturation) which it tracks on the video in real time and displays on two screens:
                <ul>
                    <li>
                    The WebCam where the tracked color is shown on the live feed.
                    </li>
                    <li>
                    The White background screen showing the same tracked path.
                    </li>
                </ul>



                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Demo</Meta>
                        <Link href="https://www.youtube.com/watch?v=IZhQtDOv29w">https://www.youtube.com/watch?v=IZhQtDOv29w <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/Floating-brush">https://github.com/git-aditya-star/Floating-brush <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Python Application</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, deque, numpy, tkinter, opencv</span>
                    </ListItem>
                </List>
                
                <WorkImage src="/brush/brush.jpg" alt="brush" />
                <WorkImage src="/brush/star.jpg" alt="brush" />
                <WorkImage src="/brush/stars.jpg" alt="brush" />
                
                
            </Container>
        </Layout>
    )
}

export default Work
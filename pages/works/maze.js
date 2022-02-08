import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Maze Puzzle">
            <Container>
                <Title>
                Maze Puzzle<Badge>2022</Badge>
                </Title>
                <P>
                Generate and Solve Mazes.<br />
                The application can generate rectangle mazes with arbitrary rows and columns, and find their paths from entrances to exits. To add some fun, the final application allows us to traverse mazes using keyboard navigation or mouse clicks.
                We used the hunt-and-kill algorithm to generate mazes and used the depth-first search algorithm to solve them.

                </P>
                <List ml={4} my={4}>
                <ListItem>
                        <Meta>Demo</Meta>
                        <Link href="https://maze-finder-001.web.app" target="_blank">https://maze-finder-001.web.app <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/maze-generation">https://github.com/git-aditya-star/maze-generation <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Website</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Angular, TypeScript</span>
                    </ListItem>
                </List>
                
                <WorkImage src="/maze/maze.jpg" alt="maze" />
                <WorkImage src="/maze/maze1.jpg" alt="maze" />
                <WorkImage src="/maze/maze2.jpg" alt="maze" />
                
                
            </Container>
        </Layout>
    )
}

export default Work
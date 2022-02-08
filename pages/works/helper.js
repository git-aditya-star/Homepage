import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Helper for any task">
            <Container>
                <Title>
                    Helper for any task<Badge>2021</Badge>
                </Title>
                <P>
                We need help with many task in our daily life, but in today&apos;s world it is hard to find a right person who is willing to help us.<br /> Using our web application, the user can post a request containing information about the task, city and the cost , he or she is willing to pay after completion. when the user posts a particular request, the other users can view the request according to the city they are in and apply for the request along with a particular message they want to send the client( related to cost or task). The client can view the applications in the request status which will showcase the applicant's name, mobile number and message and then the client can accept whichever request he finds fit for the job.
<br />
Our application can serve as a way for people to help others where they can negotiate about the price among themselves. As there aren't many task specific professional people. The Task may vary from shifting of furniture to cutting some overgrown tree to washing cars to anything!!
<br />
There are many things many things that elderly people need help with such tasks may include buying medicine , shifting some furniture etc.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                        <Meta>Demo</Meta>
                        <Link href="https://www.youtube.com/watch?v=kWp8X5hRHEY">https://www.youtube.com/watch?v=kWp8X5hRHEY <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/helper_for_a_task">https://github.com/git-aditya-star/helper_for_a_task <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Website</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java,MySql,Apache Maven,Tomcat, html, css</span>
                    </ListItem>
                </List>
                
                <WorkImage src="/helper/helper.jpg" alt="helper" />
                <WorkImage src="/helper/req.jpg" alt="helper" />
                <WorkImage src="/helper/search.jpg" alt="helper" />
                <WorkImage src="/helper/msg.jpg" alt="helper" />
                <WorkImage src="/helper/ms1.jpg" alt="helper" />
                
                
            </Container>
        </Layout>
    )
}

export default Work
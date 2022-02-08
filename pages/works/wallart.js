import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Wall Art">
            <Container>
                <Title>
                    Wall Art<Badge>2020</Badge>
                </Title>
                <P>
                A Wallpaper App with Pre-existing Categories, Trending Wallpapers and Seach feature. <br />
                The app has a variety of Categories of images like Street Art, Wild Life, Nature, City, etc.
                Trending Wallpapers are also shown on the homepage which are update on daily basis.
                User can also search for any type of wallpaper using the search bar. 
                Each wallpaper is of high definition quality and can be saved to the local storage of the device.

                </P>
                <List ml={4} my={4}>
                
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/Wall-Art">https://github.com/git-aditya-star/Wall-Art <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter, Dart, pexels api</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Apk</Meta>
                        <Link href="https://drive.google.com/file/d/1-wlzkH7GmeY6PKVIDOPMDJquoyfXuY1U/view?usp=sharing">https://drive.google.com/file/d/1-wlzkH7GmeY6PKVIDOPMDJquoyfXuY1U/view?usp=sharing <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    
                </List>
                <SimpleGrid columns = {[1,1,2]}  gap={6}>
                <WorkImage src="/wallart/wallart1.jpg" alt="wallart" />
                <WorkImage src="/wallart/wallart2.png" alt="wallart" />
                <WorkImage src="/wallart/wallart3.png" alt="wallart" />
                <WorkImage src="/wallart/wallart4.png" alt="wallart" />
                <WorkImage src="/wallart/wallart5.png" alt="wallart" />

                
                </SimpleGrid>
                
            </Container>
        </Layout>
    )
}

export default Work
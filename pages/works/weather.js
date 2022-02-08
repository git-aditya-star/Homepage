import {Container, Badge, Link, List, ListItem, SimpleGrid}  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Weather App">
            <Container>
                <Title>
                Weather App<Badge>2020</Badge>
                </Title>
                <P>
                Get the Weather Information of any city in the world.<br />
                The homepage features a number of prominent cities where users may rapidly get weather data.
A search function is available to locate any city in the globe.
Temperature, Weather, Humidity, and WindSpeed are all included in the weather data.

                </P>
                <List ml={4} my={4}>
                
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://github.com/git-aditya-star/Weather-App">https://github.com/git-aditya-star/Weather-App <ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flutter, Dart, openWeather api</span>
                    </ListItem>
                    
                    
                </List>
                <SimpleGrid columns = {[1,1,2]}  gap={6}>
                <WorkImage src="/weather/weather3.jpg" alt="weather" />
                <WorkImage src="/weather/weather2.jpg" alt="weather" />
                <WorkImage src="/weather/weather1.jpg" alt="weather" />
                

                
                </SimpleGrid>
                
            </Container>
        </Layout>
    )
}

export default Work
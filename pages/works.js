import { Container, SimpleGrid, Heading , Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbArChem from '../public/archem.jpg'
import thumbCovid19 from '../public/covid/covid.jpg'
import thumbHelper from '../public/helper/helper.jpg'
import thumbWallArt from '../public/wallart/splash.png'
import thumbWidget from '../public/widget/widget1.jpg'
import thumbBrush from '../public/brush/brush.jpg'
import thumbWeather from '../public/weather/weather2.jpg'
import thumbMaze from '../public/maze/maze.jpg'


const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns = {[1,1,2]}  gap={6}>
                <Section delay={0.2}>
                    <WorkGridItem id="archem" title="Ar Chemistry"  thumnail={thumbArChem}>
                        Simulate organic compounds in Augumented Reality
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem id="covid" title="Covid-19 Detection" thumnail={thumbCovid19}>
                        Test for Covid 19 with lungs X ray images along with an informative chatbot
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="helper" title="Helper for any task" thumnail={thumbHelper}>
                    We need help with many task in our daily life, but in today&apos;s world it is hard to find a right person who is willing to help us.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="wallart" title="Wall Art" thumnail={thumbWallArt}>
                    A Wallpaper App with Pre-existing Categories, Trending Wallpapers and Seach feature.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="widget" title="Covid-19 Desktop Widget" thumnail={thumbWidget}>
                    A Desktop widget to get the details of Covid-19 cases in any country and world.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="brush" title="Floating Brush" thumnail={thumbBrush}>
                    Upgrade the traditional way of whiteboard by drawing in the air itself.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="weather" title="Weather App" thumnail={thumbWeather}>
                    Get the Weather Information of any city in the world.
                    </WorkGridItem>
                </Section>
                <Section delay={0.6}>
                    <WorkGridItem id="maze" title="Maze Puzzle" thumnail={thumbMaze}>
                    Generate and Solve Mazes.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}


export default Works
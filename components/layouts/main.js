import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box , Container } from '@chakra-ui/react'
import Island from '../island.js'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
    return (
        <Box  as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Aditya - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.xl" pt={14}>
            <NoSsr>
                <Island />
                </NoSsr>
                {children}
            </Container>

        </Box>
    )
}

export default Main